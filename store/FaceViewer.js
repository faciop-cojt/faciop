export const state = () => ({
  isViewerVisible: false
});

export const mutations = {
  setViewerVisible(state, visible){
    state.isViewerVisible = visible;
  }
}

export const getters = {
  viewerVisible(state){
    return state.isViewerVisible;
  }
}

export const actions = {
  changeViewerVisible({ commit }){
    commit('setViewerVisible', true);
  },
  changeViewerInvisible({commit}){
    commit('setViewerVisible', false);
  }
}