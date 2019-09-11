<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <h4> Total number of animals: {{ animalsCount }} </h4>
    <br />
    <h5> Total number of cats: {{ catsCount }} </h5>
    <h5> Total number of dogs: {{ animalsCount-catsCount }} </h5>

    <button @click='tooglePetForm' class="btn btn-primary add-pet-btn">Add a new pet</button>

      <b-form @submit.prevent="onSubmit" v-if="showpetForm" class='form-container'>

      <b-form-group id="input-group-2" label="Pets Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your location:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.location"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.color"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Gender:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.gender"
          :options="[ 'male', 'female' ]"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.species"
          :options="[ 'cats', 'dogs' ]"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Notes:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.notes"
          required
          placeholder="Any other notes?"
        ></b-form-input>
      </b-form-group>

      <div>
        <b-button type="submit" variant="primary" class='form-button'>Submit</b-button>
        <b-button type="reset" variant="danger" class='form-button'>Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showpetForm: false,
      form: {
        name: '',
        breed: '',
        color: '',
        location: '',
        notes: '',
        age: 0,
        weight: 0,
        gender: null,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'catsCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    tooglePetForm () {
      this.showpetForm = !this.showpetForm
    },
    onSubmit () {
      const { species, gender, age, weight, name, breed, color, location, notes } = this.form

      const payload = {
        species,
        pet: {
          name,
          breed,
          color,
          location,
          age,
          weight,
          gender,
          notes,
          species: species.slice(0, -1)
        }
      }

      this.addPet(payload)

      // reset form
      this.form = {
        name: '',
        breed: '',
        color: '',
        location: '',
        notes: '',
        age: 0,
        weight: 0,
        gender: null,
        species: null
      }
    }
  }
}
</script>
