import {createStore} from "vuex";
import {
  get_member,
  get_member_planets,
  login,
  set_spacename,
  get_planet_list,
  get_reward_list,
  add_new_planet,
  add_planet_point,
  get_mission,
  exchange_planet,
  get_point,
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
    missions: {},
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
      const target = state.planets.filter((planet) => planet.id == id)[0];

      if (target.max_point > target.point) {
        target.point += 10;
      }
      state.member.point -= 10;
    },
    SET_PLANET_TYPES(state, list) {
      state.planetTypes = list;
    },
    SET_REWARD_TYPES(state, list) {
      state.rewardTypes = list;
    },
    SET_MISSIONS(state, list) {
      const daily = list.filter((mission) => {
        return mission.category === "daily";
      });
      const welcome = list.filter((mission) => {
        return mission.category === "welcome";
      });
      state.missions.daily = daily;
      state.missions.welcome = welcome;
    },
    SET_TARGET_ID(state, data) {
      state.targetId = data.id;

      state.targetImg = data.rewardImg;
    },
  },
  actions: {
    // - 교환하기를 누른 행성의 data set
    SAVE_TARGET(context, data) {
      context.commit("SET_TARGET_ID", data);
    },
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
        context.commit("SET_PLANETS", res);
        return res;
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
    // - 새로운 행성 생성
    async ADD_PLANET(context, payload) {
      return add_new_planet(payload).then((res) => {});
    },
    // - 행성 레벨업을 위한 포인트 +10
    async ADD_POINT(context, id) {
      return add_planet_point(id).then((res) => {
        context.commit("SET_POINT", id);
      });
    },
    // - 미션 목록 조회
    async GET_MISSION(context) {
      return get_mission().then((res) => {
        context.commit("SET_MISSIONS", res);
        return res;
      });
    },
    // 교환권 교환
    async EXCHANGE_PLANET(context, id) {
      return exchange_planet(id).then((res) => {
        return res;
      });
    },
    // 미션 수행 완료
    async DONE_MISSION(context, id) {
      return get_point(id).then((res) => {
        return res;
      });
    },
  },
  modules: {},
});
