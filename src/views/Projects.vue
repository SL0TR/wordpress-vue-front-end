<template>
  <div class="projects">
    <h1 class="mb-4">This is the projects page</h1>
    <div class="project-card mb-2" v-for="(project, id) in projects" :key="id">
      <img class="project-card__bg" :src="project.better_featured_image.source_url" alt="project image">
      <h3 class="project-card__title">{{ project.title.rendered }}</h3>
      <div class="project-card__dsecription p-1" v-html="project.content.rendered"></div>
      <div class="project-card__stack mb-1"> {{ project.acf.stack }} </div>
      <div class="project-card__date mb-1"> {{ project.acf.date_created }} </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'projects',
  data () {
    return {
      projects: []
    }
  },
  methods: {
    getData () {
      this.$http.get('wp/v2/projects')
        .then(res => {
          let { data } = res
          data.forEach(elem => {
            this.projects.push(elem)
            console.log(this.projects)
          })
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

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.project-card {
    width: 40rem;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .15);
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    &__bg {
      height: 15rem;
      width: 100%;
      filter: brightness(50%);
    }

  }

</style>
