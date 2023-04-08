<script setup>
import { defineAsyncComponent } from 'vue'
import AsyncLoadError from '../components/async/AsyncLoadError.vue'
import AsyncLoading from '../components/async/AsyncLoading.vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import ('../components/async/AsyncComponent.vue'),

  // A component to use while the async component is loading
  loadingComponent: AsyncLoading,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,

  // A component to use if the load fails
  errorComponent: AsyncLoadError,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
})
</script>

<template>
  <AsyncComp />
</template>
