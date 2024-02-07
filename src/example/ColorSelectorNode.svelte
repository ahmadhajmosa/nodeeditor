<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';

  type $$Props = NodeProps;

  export let data: $$Props['data'];
  export let isConnectable: $$Props['isConnectable'];
  let textValue = data.content;
  let nodeWidth = data.title.length > data.content.length ? data.title.length * 5 : textValue.length * 1; // Adjust the multiplier as needed
  let nodeHeight = data.title.length > data.content.length ? data.title.length * 0.5 : textValue.length * 0.2; // Adjust the multiplier as needed

  $: nodeWidth = data.title.length > data.content.length ? data.title.length * 5 : textValue.length * 1; // Recalculate nodeWidth when textValue or data.title changes
  $: nodeHeight = data.title.length > data.content.length ? data.title.length * 0.5 : textValue.length * 0.2; // Recalculate nodeHeight when textValue or data.title changes
  data.width = nodeWidth
  data.height = nodeHeight

</script>
<div style="width: {nodeWidth}px;">
<Handle type="target" position={Position.Left} style="background: #555;" {isConnectable} />
<div>
  <strong style="font-size: 11px;">{data.title}</strong>
</div>
<input
class="nodrag"
bind:value={data.subtitle}
style="font-weight: bold; font-size: 8px; width: {nodeWidth * 0.5 }px; height: 10px; overflow: auto; border: none;"
on:input={(event) => {
  let textValue = event.currentTarget.value;
  console.log(textValue);
  data.subtitle = textValue;
}}/>
<textarea
class="nodrag"
bind:value={textValue}
style="font-size: 9px; width: {nodeWidth * 0.9 }px;height: {nodeHeight }px; overflow: auto;"
on:input={(event) => {
  let textValue = event.currentTarget.value;
  console.log(textValue);
  data.content = textValue;
}}
></textarea>

<Handle
  type="source"
  position={Position.Right}
  {isConnectable}
  style="top: 50%; bottom: auto;"
/>
</div>

<style>
  :global(.svelte-flow__node-selectorNode) {
    font-size: 12px;
    background: #eee;
    border: 1px solid #6a0606;
    border-radius: 5px;
    text-align: center;
  }
</style>
