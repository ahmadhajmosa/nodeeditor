<script lang="ts">
  import { writable } from 'svelte/store';
  import dagre from '@dagrejs/dagre';
  import {
    SvelteFlow,
    Background,
    Position,
    ConnectionLineType,
    Panel,
    type Node,
    type Edge
  } from '@xyflow/svelte';
  import ColorSelectorNode from './ColorSelectorNode.svelte';

  import '@xyflow/svelte/dist/style.css';
  const nodeTypes = {
    selectorNode: ColorSelectorNode
  };
  import { initialNodes, initialEdges } from './nodes-and-edges';

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth_s = 172;
  const nodeHeight_s = 36;
  let currentLevel = 0;
  let fitView = false;
  let isLoading = false; // Add loading state
  function getLayoutedElements(nodes: Node[], edges: Edge[], direction = 'LR') {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      let nodeWidth = node.data.width ? node.data.width : nodeWidth_s;
      let nodeHeight = node.data.height ? node.data.height : nodeHeight_s;
      dagreGraph.setNode(node.id, { width: nodeWidth , height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? Position.Left : Position.Top;
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
      console.log("data", node )
      let nodeWidth = node.data.width ? node.data.width : nodeWidth_s;
      let nodeHeight = node.data.height ? node.data.height : nodeHeight_s;
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x * 2.2 - nodeWidth / 4,
        y: nodeWithPosition.y - nodeHeight / 4
      };
    });

    return { nodes, edges };
  }

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );
  const nodes = writable<Node[]>(layoutedNodes);
  const edges = writable<Edge[]>(layoutedEdges);
    onLayout()

  async function onLayout() {
    isLoading = true; // Set loading state to true

  await new Promise(resolve => setTimeout(resolve, 5000)); // Add delay
  isLoading = false; // Set loading state to false
  currentLevel++;
  const filteredNodes = initialNodes.filter(node => node.data.level <= currentLevel);
  const filteredEdges = initialEdges.filter(edge => {
    const sourceNode = initialNodes.find(node => node.id === edge.source);
    const targetNode = initialNodes.find(node => node.id === edge.target);
    return sourceNode.data.level <= currentLevel && targetNode.data.level <= currentLevel;
  });
  const layoutedElements = getLayoutedElements(filteredNodes, filteredEdges, 'LR');
  $nodes = layoutedElements.nodes;
  $edges = layoutedElements.edges;
  fitView = !fitView;

}
</script>

<div style="height:100vh; background-color: blue;">
  <SvelteFlow
    {nodes}
    {edges}
    {nodeTypes}
    {fitView}
    style="background: #282828"
    connectionLineType={ConnectionLineType.SmoothStep}
    defaultEdgeOptions={{ type: 'smoothstep', animated: true }}
  >
    <Panel position="top-center">
      <button on:click={() => onLayout()} disabled={isLoading} style="font-size: 1.5em;">{isLoading ? 'Loading...' : 'Next'}</button>
    </Panel>
    <Background />
  </SvelteFlow>
</div>