<script setup>
import DefaultTheme from 'vitepress/theme';
import { ref } from 'vue';
import Loading from './Loading.vue';

const { Layout } = DefaultTheme;
const show = ref(false);

setTimeout(() => {
  show.value = true;
  // console.log('show');
}, 1000);
</script>

<template>
  <Layout v-if="show">
    <!-- <template #aside-outline-before> My custom sidebar top content </template> -->
  </Layout>
  <Loading v-else />
  <!-- <div v-else class="loading">加载中</div> -->
</template>
<style lang="scss">
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}
</style>
