export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  catsCount: (state) => {
    return state.cats.length
  }
}
