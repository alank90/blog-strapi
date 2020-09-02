<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1 class="title">
          Alan's Home Blog
        </h1>
        <h2>My Thought's on Music, Books etc...</h2>
        <Articles :articles="articles"></Articles>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles';
import Articles from '~/components/Articles';

export default {
  components: {
    Articles,
  },
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 500;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
