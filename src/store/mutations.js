export default {
    setOriginalImageUrl(state, url) {
        return state.originalImageUrl = url;
    },
    setOriginalImageName(state, filename) {
        return state.originalImageName = filename;
    },
    setStyleImageUrl(state, url) {
        return state.styleImageUrl = url;
    },
    setStyleImageName(state, filename) {
        return state.styleImageName = filename;
    },
    setAppliedImageName(state, filename) {
        return state.styleImageName = filename;
    },
    setManipulatedImage(state, url) {
        state.manipulatedImageUrl = url;
    },
    setAuth(state, isAuth) {
        return state.isAuth = isAuth;
    },
}
