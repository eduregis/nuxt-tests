export const state = () => ({
  dark: true
})

export const mutations = {
  toggleDark (state){
    state.dark = !state.dark
  }
}