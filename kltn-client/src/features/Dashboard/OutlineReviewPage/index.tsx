import PageLayout from "~/components/common/PageLayout";
import { OutlineReviewProvider } from "~/contexts/OutlineReviewContext";
import OutlineReviewTableResult from "./OutlineReviewTableResult";
import EditOutlineReviewModal from "./EditOutlineReviewModal";

const OutlineReview = (): JSX.Element => {
  return (
    <PageLayout pageTitle="Đánh giá đề cương">
      <OutlineReviewProvider>
        {/* <OutlineReviewSearchForm /> */}
        <OutlineReviewTableResult />
        {/* <AddNewOutlineReviewModal /> */}
        <EditOutlineReviewModal />
      </OutlineReviewProvider>
    </PageLayout>
  );
};

export default OutlineReview;
