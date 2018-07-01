<template>
  <div class="home">
    <h1 class="mt-3" v-html="title"></h1>
    <h2 class="mt-2" v-html="headerTitle"></h2>
    <h3 class="mt-2" v-html="headerDescription"></h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      title: '',
      headerTitle: '',
      headerDescription: ''
    }
  },
  methods: {
    getData () {
      this.$http.get('wp/v2/header')
        .then(res => {
          let { data } = res
          // console.log(data)
          this.title = data[0].content.rendered
          this.headerTitle = data[0].acf.title
          this.headerDescription = data[0].acf.description
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }

}
</script>

<style lang="scss">
@import url('../sass/utilities.scss');

</style>
