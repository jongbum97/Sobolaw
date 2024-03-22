import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { getPrecedents } from "../../api/members";
import MyCaseList from "../../components/mypage/MyCaseList";
import { MemberPrecedent } from "../../types/DataTypes";
import style from "../../styles/mypage/Mycase.module.css";

export default function MyCase() {
  const navigate = useNavigate();
  // const user = useSelector((state: RootState) => state.user);
  const [caseList, setCaseList] = useState<MemberPrecedent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPrecedents(2);
      setCaseList(response);
    };
    fetchData();
    // }, [user.accessToken]
  }, []);

  return (
    <>
      <div className="pages">
        <div className={style["mycase-box"]}>
          <div className={style["button-box"]}>
            <Button
              shape="round"
              type="primary"
              className={style["mypaper-button"]}
              onClick={() => {
                navigate("/recommend");
              }}
            >
              판례 추천받기
            </Button>
          </div>
          <MyCaseList cases={caseList} />
        </div>
      </div>
    </>
  );
}