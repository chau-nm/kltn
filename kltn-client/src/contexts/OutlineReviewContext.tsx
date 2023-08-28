import {
  createContext,
  useState,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
} from "react";
import { useMutation } from "react-query";
import * as ThesisService from "~/services/thesisService";
import { AuthContext } from "./AuthContext";

interface OutlineReviewContextInterface {
  isLoading: boolean;

  listThesis: ThesisModel[];
  setListThesis: React.Dispatch<SetStateAction<ThesisModel[]>>;

  thesisDetail: ThesisModel | undefined;
  setThesisDetail: React.Dispatch<SetStateAction<ThesisModel | undefined>>;

  openEditOutlineReviewModal: boolean;
  setOpenEditOutlineReviewModal: React.Dispatch<SetStateAction<boolean>>;

  search: () => void;
}

const initOutlineReviewContext: OutlineReviewContextInterface = {
  isLoading: false,

  listThesis: [],
  setListThesis: () => null,

  thesisDetail: undefined,
  setThesisDetail: () => null,

  openEditOutlineReviewModal: false,
  setOpenEditOutlineReviewModal: () => null,

  search: () => {},
};

export const OutlineReviewContext = createContext(initOutlineReviewContext);

export const OutlineReviewProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [listThesis, setListThesis] = useState<ThesisModel[]>([]);
  const [thesisDetail, setThesisDetail] = useState<ThesisModel>();
  const [openEditOutlineReviewModal, setOpenEditOutlineReviewModal] =
    useState<boolean>(false);

  /**
   * search OutlineReview detail mutation
   */
  const searchOutlineReview = useMutation(
    ThesisService.searchByCouncilReviewerComment,
    {
      onSuccess: (data: ThesisModel[]) => {
        if (data) {
          setListThesis(data);
        }
      },
    }
  );

  const search = (): void => {
    searchOutlineReview.mutate(user?.userId ?? "");
  };

  return (
    <OutlineReviewContext.Provider
      value={{
        isLoading: searchOutlineReview.isLoading,

        search,

        listThesis,
        setListThesis,

        thesisDetail,
        setThesisDetail,

        openEditOutlineReviewModal,
        setOpenEditOutlineReviewModal,
      }}
    >
      {children}
    </OutlineReviewContext.Provider>
  );
};
