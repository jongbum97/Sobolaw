import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined, FormOutlined, InboxOutlined } from "@ant-design/icons";

interface RightMenuProps {
  username: string;
  mode: "horizontal";
  selectedSubKeys: string[];
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSubKeys: React.Dispatch<React.SetStateAction<string[]>>;
}

const MypageMenu: React.FC<RightMenuProps> = ({
  username,
  mode,
  setSelectedKeys,
  selectedSubKeys,
  setSelectedSubKeys,
}) => {
  const subClickHandler = ({ key }: { key: string }) => {
    setSelectedKeys([""]);
    setSelectedSubKeys([key]);
  };

  return (
    <Menu mode={mode} selectedKeys={selectedSubKeys} onSelect={subClickHandler}>
      <Menu.SubMenu
        key="userMenu"
        title={
          <>
            <span className="username" style={{ width: "2rem" }}>
              <p style={{ color: "#BF8438", fontWeight: "bold" }}>{username}</p>
              <p>님</p>
            </span>
          </>
        }
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/mypage/user">회원정보</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FormOutlined />}>
          <Link to="/mypage/papers">내가 쓴 소장</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InboxOutlined />}>
          <Link to="/mypage/case">저장한 판례</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MypageMenu;
