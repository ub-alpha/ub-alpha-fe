import axios from "axios";

// GET 미션 조회 /mission
export async function get_mission() {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/mission`,
    method: "GET",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
  });
  return data;
}

// POST 미션을 수행함 /mission/log

export async function try_mission() {
  // {
  //     "mission": 1,
  // }
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/mission/log`,
    method: "POST",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
    data: {},
  });
  return data;
}

// PUT 미션 포인트를 보상 받음 /mission/log/{log_id}

export async function get_point(log_id) {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/mission/log/${log_id}`,
    method: "PUT",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
    data: {},
  });
  return data;
}
