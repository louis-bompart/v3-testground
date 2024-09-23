import '@coveo/atomic/dist/atomic/themes/coveo.css';
import { defineCustomElements } from "@coveo/atomic/loader";

defineCustomElements();
await customElements.whenDefined('atomic-search-interface');
const searchInterface = document.querySelector('atomic-search-interface')!;

// Initialization
await searchInterface.initialize({
  accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
  organizationId: 'searchuisamples',
});

// Trigger a first search
searchInterface.executeFirstSearch();
