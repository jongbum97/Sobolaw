import { userAxios, localuserAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = userAxios();
const testHttp = localuserAxios();

const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const url = "members";
const testToken = "";

// reissue token
async function reissueToken(accessToken: string, refreshToken: string) {
  const response = await http.post("token/refresh", refreshToken, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // console.log(response);
  const responseData = response.data;
  if (responseData.status == 401) {
    alert("세션이 만료되었습니다! 재로그인해주세요");
  } else {
    return responseData.data;
  }
}

// 멤버 정보 조회
async function getUserInfo(accessToken: string) {
  const response = await http.get(`${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

// 로그아웃
async function postLogout(accessToken: string, refreshToken: string) {
  const response = await http.post(`${url}/logout`, refreshToken, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

// 회원탈퇴
async function deleteUser(accessToken: string, refreshToken: string) {
  await http.delete(`${url}/delete`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      refreshToken: refreshToken,
    },
  });
}

// 멤버가 저장한 판례 조회
async function getPrecedents(accessToken: string) {
  const response = await http.get(`${url}/precedents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

// 멤버가 조회한 판례를 '최근 본 판례'로 저장
async function postRecentPrecedents(accessToken: string, precedentId: number) {
  await http.post(
    `${url}/recents`,
    { precedentId },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

// 멤버가 최근 본 판례 리스트 조회
async function getRecentPrecedents(accessToken: string) {
  const response = await http.get(`${url}/recents`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

// 키워드 저장
async function postMyKeyword(accessToken: string, words: string[]) {
  await http.post(
    `${url}/keywords`,
    { words },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

// 관리자용 API
// 멤버 전체 리스트 조회
async function getMemberList() {
  const response = await http.get(url);
  return response.data.data;
}

export {
  reissueToken,
  getUserInfo,
  getPrecedents,
  postRecentPrecedents,
  getRecentPrecedents,
  getMemberList,
  postMyKeyword,
  postLogout,
  deleteUser,
};
