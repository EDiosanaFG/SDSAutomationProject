<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const tsv = computed(() => {
  const rows = props.data;
  if (!rows.length) return '';

  const headers = Object.keys(rows[0]);
  const lines = rows.map(row =>
    headers.map(h => row[h]).join('\t')
  )

  return [headers.join('\t'), ...lines].join('\n');
});
</script>

<template>
  <textarea 
    readonly 
    :value="tsv"
    @focus="$event.target.select()" 
    rows="20" 
    wrap="off"
    class="w-full whitespace-pre overflow-x-auto" 
    />
</template>

<style scoped>
  textarea {
    white-space: pre;
    overflow-x: scroll;
  }
</style>