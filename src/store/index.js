import { createStore } from "vuex";

export default createStore({
  state: {
    member: {
      member_id: 0,
      spacename: "나만의",
      point: 0,
    },
    planets: [
      {
        planet_id: 0,
        image: "",
      },
      {
        planet_id: 1,
        image: "",
      },
    ],
  },
  getters: {},
  mutations: {
    SET_SPACENAME(state, spacename) {
      this.state.member.spacename = spacename;
    },
    SET_POINT(state, pointNum) {},
  },
  actions: {
    GET_MEMBER(context) {},
    GET_PLANETS(context) {},
    // 행성 이름 설정
    MAKE_SPACE(context, spacename) {
      context.commit("SET_SPACENAME", spacename);
    },
    ADD_PLANET(context) {},
  },
  modules: {},
});
