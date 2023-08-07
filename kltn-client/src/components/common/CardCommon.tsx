import { Card, CardProps } from "antd";

type CardCommonProps = {
  children: React.ReactNode;
};

type CarType = CardCommonProps & CardProps;

const CardCommon = ({ children, ...rest }: CarType): JSX.Element => {
  return (
    <Card
      {...rest}
      className="mt-2 w-full"
      headStyle={{
        backgroundColor: "#000c66",
        fontSize: "1.15rem",
        fontWeight: "bold",
        color: "#ffffff",
      }}
    >
      {children}
    </Card>
  );
};

export default CardCommon;
