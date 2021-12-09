export default {
    getOriginalImageName(state) {
      return state.originalImageName;
    },
    getOriginalImageUrl(state) {
      return state.originalImageUrl;
    },
    getStyleImageName(state) {
      return state.styleImageName;
    },
    getStyleImageUrl(state) {
      return state.styleImageUrl;
    },
    getManipulatedImageUrl(state) {
      return state.manipulatedImageUrl;
    },
    getAuthStatus(state){
      return state.isAuth;
    }
     
  }