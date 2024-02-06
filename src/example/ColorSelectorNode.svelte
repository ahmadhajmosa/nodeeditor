<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';

  type $$Props = NodeProps;

  export let data: $$Props['data'];
  export let isConnectable: $$Props['isConnectable'];

  const { title } = data;
</script>

<Handle type="target" position={Position.Left} style="background: #555;" {isConnectable} />
<div>
 <strong>{$title}</strong>
</div>
<input
  class="nodrag"
  type="text"
  on:input={(event) => {
    $title = event.currentTarget.value;
  }}
  value={$title}
/>
<Handle
  type="source"
  position={Position.Right}
  id="a"
  style="top: 10px; background: #555;"
  {isConnectable}
/>
<Handle
  type="source"
  position={Position.Right}
  id="b"
  style="bottom: 10px; top: auto; background: #555;"
  {isConnectable}
/>

<style>
  :global(.svelte-flow__node-selectorNode) {
    font-size: 12px;
    background: #eee;
    border: 1px solid #6a0606;
    border-radius: 5px;
    text-align: center;
  }
</style>
