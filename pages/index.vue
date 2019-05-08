<template>
  <div class="test">
    <p>{{ text }}</p>
    <p>{{ user.id }}</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  head() {
    return {
      title: "测试nuxt seo性能",
      meta: [
        {
          name: "keywords",
          content: "唱、跳、rap、篮球"
        }
      ]
    };
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      text:
        "测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo测试seo"
    };
  },
  asyncData({app}) {
    return {
        user: {
            id: 1,
            name: "consolas"
        }
    };
  }
};
</script>
