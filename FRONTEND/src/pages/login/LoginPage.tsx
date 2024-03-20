import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { saveAccessToken } from "../../redux/reducers/user/userSlice";
import style from "../../styles/common/Login.module.css";
import backImg from "/images/loginBg.jpg";
import LoginBtnKaKao from "/images/KAKAO_LOGIN.png";
import LoginBtnNaver from "/images/NAVER_LOGIN.png";

// // 토큰을 통해 회원가입이 되어있는지 / 아닌지 판단하고 load해오는 함수
// const loadUserInfo = () => {
//   // 토큰이 있는지 확인하고, 서버에 user info를 확인하자
//   if (accessToken) {
//     axios
//       .get("링크링크링크", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       })
//       .then((res) => {
//           // console.log(res.data)
//           dispatch(saveUser(tmpUser));
//           dispatch(login());
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };

function LoginPage() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const kakaoURL = `https://j10a604.p.ssafy.io/api/user-service/oauth2/authorization/kakao`;
  const naverURL = `http://70.12.247.27:8001/api/user-service/oauth2/authorization/kakao`;

  // 토큰 가져오는 useEffect
  useEffect(() => {
    // 현재 url에서 토큰을 가져와서 저장하자
    // const token = new URL(document.location.toString()).searchParams.get(
    const token = new URL(
      "https://j10a604.p.ssafy.io/?accessToken=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLquYDtmITsp4AiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEwOTA5OTk5LCJleHAiOjE3MTE1MTQ3OTl9.nY3DRcH6aD0csx6oFrJMKCQDbrnugM6uRUPvOBpBkxRIxP-BpGRn-gwlH_wDLF2NH6mJ0BOvWoZr0oN5XT3fsA"
    ).searchParams.get("accessToken");
    console.log(token);
    console.log(window.location.href);

    // const token = new URL(window.location.href).searchParams.get("Authorization");
    if (token) {
      // 세션에 accessToken을 저장해주자
      dispatch(saveAccessToken(token));
      console.log(token);
      console.log(accessToken);
    } else {
      (" 토큰안뜸");
    }
    if (accessToken) {
      // loadUserInfo();
      navigate("/");
    }
  }, [navigate]);

  console.log(accessToken);
  const kakaoLogin = function () {
    // 로그인버튼을 누르면 카카오 로그인 창으로 간다
    window.location.href = kakaoURL;
    const token = new URL(window.location.href).searchParams.get("accessToken");
    console.log(token);
    console.log(new URL(window.location.href));
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backImg})`,
        backgroundSize: "cover", // 이미지를 화면에 최대한 맞추기
        backgroundPosition: "center", // 이미지를 가운데 정렬
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white", // 텍스트 색상을 흰색으로 지정
        fontSize: "3rem",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <p>소송 준비의 첫걸음</p>
        <p>소보로와 함께</p>
      </div>
      <img
        src={LoginBtnKaKao}
        className={style["login-btn-kakao"]}
        onClick={kakaoLogin}
        style={{ cursor: "pointer" }}
      />
      <img
        src={LoginBtnNaver}
        className={style["login-btn-naver"]}
        onClick={() => (window.location.href = naverURL)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default LoginPage;
