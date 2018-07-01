<template>
  <div id="app">
    <div class="container">
      <img class="container__bg-image" :src="bgImage" alt="Background Image">
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bgImage: ''
    }
  },
  methods: {
    getBg () {
      this.$http.get('wp/v2/header')
        .then(res => {
          let { data } = res
          // console.log(data)
          this.bgImage = data[0].better_featured_image.source_url
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getBg()
  }

}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;

}

.container {
  height: 100vh;
  position: relative;
  z-index: 10;

  &__bg-image {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .05;
  }

}

.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
