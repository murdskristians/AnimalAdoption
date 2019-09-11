<template>
  <div>
    <h1> {{ animal.name }} (One of the {{ $route.params.species }}) </h1>
    <p> Age: {{ animal.age }} </p>
    <p> Breed: {{ animal.breed }}</p>
    <p> Gender: {{ animal.gender }}</p>
    <p> Color: {{ animal.color }}</p>
    <p> Weight: {{ animal.weight }}</p>
    <p> Location: {{ animal.location }}</p>
    <p> Additional notes: {{ animal.notes }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState(
      [
        'cats',
        'dogs'
      ]
    )
  },
  mounted () {
    // Params comes from router.js "/:species/:id"
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
