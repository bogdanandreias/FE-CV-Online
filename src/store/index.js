import { createStore } from 'vuex'

export default createStore({
  state: {
    api_url: 'http://86.121.45.52:3000/api/',
    uploads_url: 'http://86.121.45.52:3000/',
    user: {
        cv: {
            about: null,
            occupation: null,
            skill1: { title: null, description: null },
            skill2: { title: null, description: null },
            skill3: { title: null, description: null },
        },
        date: null,
        email: null,
        firstName: null,
        image: "uploads/image/default.png",
        lastName: null,
        pdf: null,
        social: {facebook: null, instagram: null, youtube: null, twitter: null},
        _id: null,
    },
    toastConfig: {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false
    }
  },
  mutations: {
    updateUser (state, user) {
        state.user = user
      },
  },
  actions: {
  },
  modules: {
  }
})
