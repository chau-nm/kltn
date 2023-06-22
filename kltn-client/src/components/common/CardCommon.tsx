import { Card, CardProps } from "antd";

type CardCommonProps = {
  children: React.ReactNode;
  cardProps?: CardProps;
};

const CardCommon = ({ children, cardProps }: CardCommonProps): JSX.Element => {
  return (
    <Card
      className="mt-2 w-full"
      headStyle={{
        backgroundColor: "#000c66",
        fontSize: "1.15rem",
        fontWeight: "bold",
        color: "#ffffff",
      }}
      {...cardProps}
    >
      {children}
    </Card>
  );
};

export default CardCommon;
