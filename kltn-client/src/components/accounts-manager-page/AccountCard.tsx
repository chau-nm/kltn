import { Avatar, Col, Row } from "antd";
import { MouseEventHandler } from "react";

type AccountTypeProps = {
    avatarUrl?: string,
    fname: string,
    username: string
}

const AccountCard = ({
    fname,
    username,
    avatarUrl,
} : AccountTypeProps) : JSX.Element => {
    return (
        <Row align={"middle"}>
            <Col className="mr-3">
                <Avatar src={avatarUrl}/>
            </Col>
            <Col>
                <div><strong className="text-lg">{fname}</strong></div>
                <div>{username}</div>
            </Col>
        </Row>
    )
}

export default AccountCard;