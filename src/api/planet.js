import axios from "axios";
// GET 행성 목록 조회 /planet/
export async function get_planet_types() {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/planet`,
    method: "GET",
  });
  return data;
}

// POST 새로운 행성 생성 /planet/detail
export async function add_new_planet(payload) {
  // {
  //     "planet": 1,
  //     "character": 1,
  // }
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/planet/detail`,
    method: "POST",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
      "Content-type": "application/json",
    },
    data: {},
  });
  return data;
}
// GET 사용자 보유 행성 조회 /planet/detail
export async function get_member_planets() {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/planet/detail`,
    method: "GET",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
  });
  return data;
}

// PUT  행성 레벨업을 위한 포인트 +10 /planet/detail/{detail_id}/point
export async function add_planet_point(detail_id) {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/planet/detail/${detail_id}/point`,
    method: "PUT",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
    data: {},
  });
  return data;
}
// PUT 할인권 교환 완료 /planet/detail/{detail_id}
export async function exchange_planet(detail_id) {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/planet/detail/${detail_id}`,
    method: "PUT",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
    data: {},
  });
  return data;
}
