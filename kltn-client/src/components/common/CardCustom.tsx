import { Card, CardProps } from "antd";

type CardCustomProps = {
  children: React.ReactNode,
  cardProps?: CardProps
};

const CardCustom = ({
  children,
  cardProps
}: CardCustomProps): JSX.Element => {
  return (
    <Card
      className="mt-2 w-[300px]"
      headStyle={{ backgroundColor: "#518df7", fontSize: '1.15rem', fontWeight: 'bold', color: '#ffffff' }}
      {...cardProps}
    >
      {children}
    </Card>
  );
};

export default CardCustom;
