import axios from "axios";

// POST 로그인 함수 /token
export async function login() {
  const userData = {
    username: "username",
    password: "password",
  };

  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/token`,
    method: "POST",
    data: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  });
  return data;
}

// GET 사용자 프로필 반환 /member/spacename
export async function get_member() {
  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/member/spacename`,
    method: "GET",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
    },
  });
  return data;
}

// PUT 새로운 스페이스 생성 /member/spacename
export async function set_spacename(spacename) {
  const userData = {
    spacename: spacename,
  };

  const {data} = await axios({
    url: `${process.env.VUE_APP_API_URL}/member/spacename`,
    method: "PUT",
    headers: {
      Authorization: `JWT ${localStorage.getItem("access_token")}`,
      "Content-type": "application/json",
    },
    data: JSON.stringify(userData),
  });
  return data;
}
