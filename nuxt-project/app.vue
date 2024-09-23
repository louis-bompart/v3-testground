<script type="module">
import { defineCustomElements } from '@coveo/atomic/loader';
defineCustomElements();
</script>

<script setup>
import '@coveo/atomic/dist/atomic/themes/coveo.css'
import { ref, onMounted } from 'vue'

const el = ref()

  onMounted(async () => {
    await customElements.whenDefined('atomic-search-interface');
    const searchInterface = el.value;
    await searchInterface.initialize({
      accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
      organizationId: 'searchuisamples',
    });

    // Trigger a first search
    searchInterface.executeFirstSearch();
  });
</script>

<template>
  <div>
    <atomic-search-interface ref="el">
      <atomic-search-box></atomic-search-box>
      <atomic-result-list></atomic-result-list>
    </atomic-search-interface>
  </div>
</template>
