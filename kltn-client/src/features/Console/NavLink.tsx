import { Col } from "antd";
import { useNavigate } from "react-router-dom";

type NavLinkProps = {
  icon: JSX.Element;
  title: string;
  path: string;
};

const NavLink = ({ icon, title, path }: NavLinkProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Col
      className="p-2 m-10 bg-white shadow-md rounded select-none cursor-pointer text-[#3c6e8f] duration-300 hover:bg-slate-100 hover:scale-105 hover:text-[#2c4a7d]"
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="text-8xl w-60 h-48 flex justify-center items-center">
        {icon}
      </div>
      <div className="text-2xl text-center font-bold h-14">{title}</div>
    </Col>
  );
};

export default NavLink;
