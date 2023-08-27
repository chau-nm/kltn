import NotificationConfirm from "./NotificationConfirm";

type ThesisInvitedListProps = {
  data: ThesisModel[] | undefined;
};

const ThesisInvitedList = ({ data }: ThesisInvitedListProps): JSX.Element => {
  return (
    <>
      {data?.map((thesis) => {
        return <NotificationConfirm key={thesis.id} thesis={thesis} />;
      })}
    </>
  );
};

export default ThesisInvitedList;
