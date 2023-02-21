import {createStore} from "vuex";
import {
  get_member,
  get_member_planets,
  login,
  set_spacename,
} from "../api/index.js";
export default createStore({
  state: {
    member: {
      spacename: null,
      point: 0,
    },
    planetTypes: [
      {planet_id: 0, image: "space-type-1.png"},
      {planet_id: 1, image: "space-type-1.png"},
      {planet_id: 2, image: "space-type-1.png"},
      {planet_id: 3, image: "space-type-1.png"},
      {planet_id: 4, image: "space-type-1.png"},
      {planet_id: 5, image: "space-type-1.png"},
      {planet_id: 6, image: "space-type-1.png"},
      {planet_id: 7, image: "space-type-1.png"},
      {planet_id: 8, image: "space-type-1.png"},
    ],
    rewardTypes: [
      {id: 0, max_point: 100, image: "1000.png", max_origin: 100},
      {id: 1, max_point: 280, image: "3000.png", max_origin: 300},
      {id: 2, max_point: 450, image: "5000.png", max_origin: 500},
    ],
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
  },
  actions: {
    // 로그인
    async GET_TOKEN(context) {
      return login();
    },
    // 사용자 프로필 반환
    async GET_MEMBER(context) {
      return get_member().then((res) => {
        context.commit("SET_MEMBER", res);
        return res;
      });
    },
    // 사용자 보유 행성 조회
    async GET_PLANETS(context) {
      get_member_planets().then((res) => {
        context.commit("SET_PLANETS", res);
      });
    },
    // 스페이스 이름 설정
    async MAKE_SPACE(context, spacename) {
      return set_spacename(spacename).then((res) => {
        context.commit("SET_SPACENAME", res.spacename);
        return res;
      });
    },
    // 새로운 행성 생성
    ADD_PLANET(context) {},
    // 행성 레벨업을 위한 포인트 +10
    ADD_POINT(context, id) {
      context.commit("SET_POINT", id);
    },
  },
  modules: {},
});
