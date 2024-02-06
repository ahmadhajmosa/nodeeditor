<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    SvelteFlow,
    Background,
    Controls,
    MiniMap,
    Position,
    type Node,
    type Edge
  } from '@xyflow/svelte';

  import ColorSelectorNode from './ColorSelectorNode.svelte';

  import '@xyflow/svelte/dist/style.css';

  const nodeTypes = {
    selectorNode: ColorSelectorNode
  };

  const bgColor = writable('#1A192B');

  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      data: { label: 'An input node' },
      position: { x: 0, y: 50 },
      sourcePosition: Position.Right
    }
  ];

  const nodes = writable<Node[]>(initialNodes);
  const edges = writable([]);

  function addNodesAndEdges() {
    const newNodes: Node[] = [
      // Add the rest of your nodes here
    ];

    const newEdges: Edge[] = [
      // Add the rest of your edges here
    ];

    nodes.set([...$nodes, ...newNodes]);
    edges.set(newEdges);
  }
</script>

<div style="height:100vh;">
  <SvelteFlow {nodes} {edges} {nodeTypes} style="background: {$bgColor}" fitView on:elementClick={addNodesAndEdges}>
    <Background />
    <Controls />
    <MiniMap />
  </SvelteFlow>
</div>