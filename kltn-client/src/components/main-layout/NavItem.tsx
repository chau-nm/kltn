import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

type NavItemProps = {
  icon: JSX.Element;
  title: string;
  path: string;
  active?: boolean;
};

const NavItem = ({
  icon,
  title,
  path,
  active = false,
}: NavItemProps): JSX.Element => {
  const navigate = useNavigate();
  const handleNavigate = (): void => {
    navigate(path);
  };
  return (
    <Row
      className={`hover:bg-gray-100 w-full p-2 relative select-none cursor-pointer rounded-xl ${active ? 'bg-gray-100' : ''}`}
      onClick={handleNavigate}
    >
      <Col className="text-base absolute top-[2px]">{icon}</Col>
      <Col className="font-bold text-base ml-7">{title}</Col>
    </Row>
  );
};

export default NavItem;
