import { SetStateAction, createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as ThesisRegisterCalendarService from "~/services/thesisRegisterCalendarService";

interface ThesisConsoleContextInterface {
    isLoadingTableResults: boolean;

    isOpenRegisterThesisModal: boolean;
    setIsOpenRegisterThesisModal: React.Dispatch<SetStateAction<boolean>>;

    thesisRegisterCalendar: ThesisRegisterCalendarModel | undefined;
    loadThesisRegisterCalendar: () => void;

}

const initThesisConsoleContextInerface : ThesisConsoleContextInterface = {
    isLoadingTableResults: false,

    isOpenRegisterThesisModal: false,
    setIsOpenRegisterThesisModal: () => null,

    thesisRegisterCalendar: undefined,
    loadThesisRegisterCalendar: () => {}
}

export const ThesisConsoleContext = createContext(initThesisConsoleContextInerface);

const ThesisConsoleProvider = ({children} : React.PropsWithChildren) : JSX.Element => {
    const [isOpenRegisterThesisModal, setIsOpenRegisterThesisModal] = useState<boolean>(false);

    const viewThesisRegisterCalendarMutation = useMutation(ThesisRegisterCalendarService.view);

    const loadThesisRegisterCalendar = () => {
        viewThesisRegisterCalendarMutation.mutate();
    }

    useEffect(() => {
        viewThesisRegisterCalendarMutation.mutate();
    }, [])

    return (
        <ThesisConsoleContext.Provider value={{
            isLoadingTableResults: false,
            isOpenRegisterThesisModal,
            setIsOpenRegisterThesisModal,
            thesisRegisterCalendar: viewThesisRegisterCalendarMutation.data,
            loadThesisRegisterCalendar
        }}>
            {children}
        </ThesisConsoleContext.Provider>
    )
}

export default ThesisConsoleProvider;