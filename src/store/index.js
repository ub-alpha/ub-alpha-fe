import {createStore} from "vuex";

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
        maxPoint: 100,
        nowPoint: 0,
      },
      {
        planet_id: 1,
        image: "",
        maxPoint: 480,
        nowPoint: 30,
      },
    ],
  },
  getters: {},
  mutations: {
    SET_SPACENAME(state, spacename) {
      state.member.spacename = spacename;
    },
    SET_POINT(state, id) {
      const target = state.planets.filter(
        (planet) => planet.planet_id == id
      )[0];

      if (target.maxPoint > target.nowPoint) {
        target.nowPoint += 10;
      }
    },
  },
  actions: {
    GET_MEMBER(context) {},
    GET_PLANETS(context) {},
    // 행성 이름 설정
    MAKE_SPACE(context, spacename) {
      context.commit("SET_SPACENAME", spacename);
    },
    ADD_PLANET(context) {},
    ADD_POINT(context, id) {
      context.commit("SET_POINT", id);
    },
  },
  modules: {},
});
