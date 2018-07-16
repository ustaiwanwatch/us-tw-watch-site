export default {
  isDesktop (state) {
    // (state, getters)
    return state.clientWidth > 850
  },
  isTablet (state) {
    // (state, getters)
    return !!(state.clientWidth > 550 && state.clientWidth <= 850)
  },
  isPhone (state) {
    // (state, getters)
    return !(state.clientWidth > 550)
  },
  isAuthenticated (state) {
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    // return new Date().getTime() < expiresAt
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}
