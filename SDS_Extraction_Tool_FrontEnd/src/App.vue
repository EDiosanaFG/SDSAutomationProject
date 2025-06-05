<script setup>
  import { ref, computed } from 'vue';
  import { useLoading } from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
  import CopyableTable from './components/CopyableTable.vue';

  const statusText = ref('');
  const picker = ref(null); // File picker
  const fileName = ref('');
  const tableData = ref([]); // Table data for copyable table

  async function onFile(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const loader = useLoading();
    const loadingInst = loader.show();

    try {

      // Set status message.
      statusText.value = `Extracting data from ${file.name}`;

      // Send the file to the API.
      const form = new FormData();
      form.append('file', file);
      const url = 'https://isura-sds-automation-api.duckdns.org/api/extract';
      const res = await fetch(url, {
        method: 'POST',
        body: form
      });


      if (!res.status || res.status !== 200) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const json = await res.json();
      const parsedJson = JSON.parse(json.jsonString);
      console.log(parsedJson);
      
      // Set the output text.
      tableData.value = [parsedJson];

      // Set the status text.
      statusText.value = 'Data extracted.';

    } catch (error) {
      statusText.value = `Error: ${error}`;
    } finally {
      loadingInst.hide();
    }

  }
</script>

<template>
  <div>
    <h1>SDS Extraction Tool</h1>
    <p>Select a Safety Data Sheet .pdf to extract data from.</p>
  </div>

  <div>
    <input ref="picker" type="file" accept=".pdf" @change="onFile" class="hidden" />
  </div>

  <p v-if="statusText">{{ statusText }}</p>
  <p v-if="fileName">Extracting data from {{ fileName }}...</p>

  <CopyableTable :data="tableData"/>


  <footer>
    <p>Created by: Ethan Diosana</p>
  </footer>
</template>


<style scoped>

</style>
