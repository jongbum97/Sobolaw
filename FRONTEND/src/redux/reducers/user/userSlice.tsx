import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../../types/DataTypes";

const initialState: UserState = {
  userId: 0,
  nickname: "",
  accessToken: "",
  refreshToken: "",
};

// 초기값 선언
const userSlice = createSlice({
  name: "user",
  initialState,

  // 액션 리듀서(함수)
  reducers: {
    // 초기화 함수
    resetAuth: (state) => {
      state.accessToken = "";
    },
    // 처음 user의 정보를 저장하는 함수
    loadInfo(state, action) {
      state.userId = action.payload.id;
      state.nickname = action.payload.nickname;
    },
    saveAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    // // 로그아웃(초기화 해주기)
    // logoutUser(state) {
    //   initialState;
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       //
  //     )
  // },
});

export const { loadInfo, resetAuth, saveAccessToken } = userSlice.actions;
export default userSlice.reducer;
