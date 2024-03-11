import { Route, Routes } from "react-router-dom";
import LayoutPage from "./components/common/Layout";
import LawCaseDetail from "./pages/lawcasedetail/LawCaseDetail";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";
import RecommendPage from "./pages/RecommendPage";
import FormPage from "./pages/FormPage";
import CalculatorPage from "./pages/CalculatorPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/mypage/Mypage";
import MyInfo from "./pages/mypage/MyInfo";
import Mypaper from "./pages/mypage/MyPaper";
import MyCase from "./pages/mypage/MyCase";

function App() {
  return (

      <Routes>
        {/* 레이아웃을 미리 짜놓고, 그 사이에 새로 만든 페이지들이 들어가게 함 */}
        <Route element={<LayoutPage />}>
          <Route path="" element={<MainPage />} />
          <Route path="/detail" element={<LawCaseDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<SearchResultPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/plaint" element={<FormPage />} />
          <Route path="/cal" element={<CalculatorPage />} />
          <Route path="/mypage/*" element={<MyPage />}>
            <Route path="" element={<MyInfo />} />
            <Route path="user" element={<MyInfo />} />
            <Route path="papers" element={<Mypaper />} />
            <Route path="case" element={<MyCase />} />
          </Route>
        </Route>
        {/* 다른 Route도 추가가능~ */}
      </Routes>
  );
}

export default App;
