import DefaultTheme from 'vitepress/theme';
import '../../style.scss';
import MyLayout from './MyLayout.vue';
import { watch, onMounted } from 'vue';
import { useRoute } from 'vitepress';
export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp(data) {},
  setup() {
    // @ts-ignore
    const base = _BASE_.value + '/';
    // @ts-ignore
    const homePath = _BASE_.value + _PAGES_[0].link;
    const route = useRoute();
    watch(route, () => {
      if (route.path == base) {
        // @ts-ignore
        location.replace(homePath);
      }
    });
    onMounted(() => {
      if (route.path == base) {
        // @ts-ignore
        location.replace(homePath);
      }
    });

    return {};
  },
};
