import { Row, Typography } from "antd";
import {  } from "@ant-design/icons";

type UserDropDownItemProps = {
    icon: JSX.Element;
    title: string;
    handleOnClick: React.MouseEventHandler<HTMLElement>;
}

const UserDropDownItem = ({
    icon,
    title,
    handleOnClick
}: UserDropDownItemProps) : JSX.Element => {
    return (
        <Row onClick={handleOnClick} className="min-w-[200px] items-center text-xl hover:bg-slate-200 p-1 rounded cursor-pointer select-none">
            {icon}
            <Typography.Text className="text-lg ml-3">
                {title}
            </Typography.Text>
        </Row>
    )
}

export default UserDropDownItem;