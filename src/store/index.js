import {createStore} from "vuex";
import {
  get_member,
  get_member_planets,
  login,
  set_spacename,
  get_planet_list,
  get_reward_list,
  add_new_planet,
} from "../api/index.js";
export default createStore({
  state: {
    member: {
      spacename: null,
      point: 0,
    },
    planetTypes: [],
    rewardTypes: [],
    planets: [],
  },
  mutations: {
    SET_MEMBER(state, member) {
      state.member = member;
    },
    SET_SPACENAME(state, spacename) {
      state.member.spacename = spacename;
    },
    SET_PLANETS(state, planets) {
      state.planets = planets;
    },
    SET_POINT(state, id) {
      const target = state.planets.filter(
        (planet) => planet.planet_id == id
      )[0];

      if (target.maxPoint > target.nowPoint) {
        target.nowPoint += 10;
      }
    },
    SET_PLANET_TYPES(state, list) {
      state.planetTypes = list;
    },
    SET_REWARD_TYPES(state, list) {
      state.rewardTypes = list;
    },
  },
  actions: {
    // -로그인
    async GET_TOKEN(context) {
      return login();
    },
    // -사용자 프로필 반환
    async GET_MEMBER(context) {
      return get_member().then((res) => {
        context.commit("SET_MEMBER", res);
        return res;
      });
    },
    // -사용자 보유 행성 조회
    async GET_PLANETS(context) {
      return get_member_planets().then((res) => {
        console.log(res);
        context.commit("SET_PLANETS", res);
      });
    },
    // -스페이스 이름 설정
    async MAKE_SPACE(context, spacename) {
      return set_spacename(spacename).then((res) => {
        context.commit("SET_SPACENAME", res.spacename);
        return res;
      });
    },
    // - 행성 종류 조회
    async GET_PLANET_LIST(context) {
      return get_planet_list().then((res) => {
        context.commit("SET_PLANET_TYPES", res);
        return res;
      });
    },
    // - 교환권 목록 조회
    async GET_REWARD_LIST(context) {
      return get_reward_list().then((res) => {
        context.commit("SET_REWARD_TYPES", res);
        return res;
      });
    },
    // 새로운 행성 생성
    async ADD_PLANET(context, payload) {
      return add_new_planet(payload).then((res) => {
        console.log(res);
      });
    },
    // 행성 레벨업을 위한 포인트 +10
    ADD_POINT(context, id) {
      context.commit("SET_POINT", id);
    },
  },
  modules: {},
});
