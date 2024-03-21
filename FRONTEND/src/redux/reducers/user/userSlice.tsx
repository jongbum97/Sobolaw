import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../../types/DataTypes";

const initialState: UserState = {
  memberId: 0,
  username: "",
  accessToken: "",
  refreshToken: "",
};

// 초기값 선언
const userSlice = createSlice({
  name: "user",
  initialState,

  // 액션 리듀서(함수)
  reducers: {
    // 처음 user의 정보를 저장하는 함수
    saveUserInfo(state, action) {
      state.memberId = action.payload.memberId;
      state.username = action.payload.username;
    },
    // saveAccessToken: (state, action) => {
    //   return {
    //     ...state,
    //     accessToken: action.payload,
    //   };
    // },
    // saveRefreshToken: (state, action) => {
    //   return {
    //     ...state,
    //     refreshToken: action.payload,
    //   };
    // },
    saveAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    saveRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },

    // 초기화 함수
    resetAuth: () => {
      return {
        ...initialState,
      };
    },
  },

  ///////////////////////////////////////////////////////
  // reducers 는 액션함수를 생성함과 동시에 해당 액션함수에 대응하는 역할
  // extraReducers 는 사용자가 slice reducer 내에서 액션함수에 접근할 수 있게하지만,
  // extraReducers 내에서 액션함수를 생성하지 않는다는 점이 기존의 reducers 프로퍼티와의 가장 큰 차이점

  // 가장 흔한 케이스는 비동기를 위해 createAsyncThunk 를 사용하여 정의된 액션함수를 사용하거나,
  // 다른 slice 에서 정의된 액션함수를 사용하는 경우

  // 외부 액션쓰거나 thunk정의하면 아래에 addCase하고 작성해주면 됨

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       //
  //     )
  // },
  ///////////////////////////////////////////////////////
});

export const { saveUserInfo, resetAuth, saveAccessToken, saveRefreshToken } =
  userSlice.actions;
export default userSlice.reducer;
