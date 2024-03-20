import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Tag,
  Layout,
  Menu,
  Button,
  Drawer,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import type { MenuProps } from "antd";
import {
  MenuOutlined,
  SmileTwoTone,
  EditTwoTone,
  CopyTwoTone,
} from "@ant-design/icons";
import { resetAuth } from "../../redux/reducers/user/userSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import { postLogout } from "../../api/members";
import style from "../../styles/common/Navbar.module.css";
import logo from "/NavLogo.png";
import MypageMenu from "./MypageMenu";

const { Header } = Layout;
const items: MenuProps["items"] = [
  { key: "1", label: <Link to="/search">판례/법령</Link> },
  { key: "2", label: <Link to="/recommend">맞춤형판례</Link> },
  { key: "3", label: <Link to="/cal">비용계산</Link> },
  { key: "4", label: <Link to="/plaint">소장작성</Link> },
];

interface ResponsiveNavProps {
  selectedKeys: string[];
  selectedSubKeys: string[];
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSubKeys: React.Dispatch<React.SetStateAction<string[]>>;
}

const ResponsiveNav = ({
  selectedKeys,
  selectedSubKeys,
  setSelectedKeys,
  setSelectedSubKeys,
}: ResponsiveNavProps) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handlelogout = () => {
    postLogout(user.accessToken);
    dispatch(resetAuth());
    navigate("/");
  };

  return (
    // 컬러 지정
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#BF8438",
          borderRadius: 2,
        },
        components: {
          Layout: {
            headerBg: "#ffffff",
          },
        },
      }}
    >
      {/* 웹사이즈 네브바 위치 수정해야함 */}
      {/* <Layout> */}
      <Header style={{ padding: 0, height: "auto" }}>
        <Row justify="space-between" align="middle">
          <Col
            xs={10}
            sm={20}
            md={4}
            style={{
              marginLeft: "2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="로고"
              style={{ width: "100px", height: "auto", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            />
          </Col>
          <Row className={style["contents"]}>
            <Col xs={0} sm={0} md={12} lg={16}>
              <Menu
                mode="horizontal"
                selectedKeys={selectedKeys}
                items={items}
              />
            </Col>
            <Col xs={0} sm={0} md={4}>
              {
                (user.accessToken = "" && (
                  <MypageMenu
                    username={user.username}
                    mode={"horizontal"}
                    setSelectedKeys={setSelectedKeys}
                    selectedSubKeys={selectedSubKeys}
                    setSelectedSubKeys={setSelectedSubKeys}
                  />
                ))
              }
            </Col>
            <Col xs={0} sm={0} md={2}>
              {user.accessToken === "" ? (
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </Button>
              ) : (
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginRight: "10px" }}
                  onClick={handlelogout}
                >
                  로그아웃
                </Button>
              )}
            </Col>
          </Row>

          {/* 핸드폰 사이즈 네브바 */}
          <Col
            xs={2}
            sm={2}
            md={0}
            style={{ paddingRight: "30px", marginRight: "15px" }}
          >
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>

        <Drawer
          title="전체 메뉴"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          open={visible}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "8rem",
              backgroundColor: "#fffbf0",
              color: "644419",
            }}
          >
            {user.accessToken === "" ? (
              <div>
                로그인이 필요합니다
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginRight: "10px", marginTop: "1rem" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </Button>
              </div>
            ) : (
              <div>
                {user.username}님! 안녕하세요
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginRight: "10px" }}
                  onClick={handlelogout}
                >
                  로그아웃
                </Button>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/mypage/user");
              }}
            >
              <SmileTwoTone
                style={{ fontSize: "3rem" }}
                twoToneColor="#BF8438"
              />
              <Tag bordered={false}>회원정보</Tag>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/mypage/papers");
              }}
            >
              <EditTwoTone
                style={{ fontSize: "3rem" }}
                twoToneColor="#BF8438"
              />
              <Tag bordered={false}>내가쓴소장</Tag>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/mypage/case");
              }}
            >
              <CopyTwoTone
                style={{ fontSize: "3rem" }}
                twoToneColor="#BF8438"
              />
              <Tag bordered={false}>저장한판례</Tag>
            </div>
          </div>

          <Menu
            mode="vertical"
            items={items}
            defaultSelectedKeys={["1"]}
          ></Menu>
        </Drawer>
      </Header>
      {/* </Layout> */}
    </ConfigProvider>
  );
};

export default ResponsiveNav;
