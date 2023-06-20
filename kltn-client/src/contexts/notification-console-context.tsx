import { PropsWithChildren, SetStateAction, createContext, useState } from "react"

interface NotificationConsoleContextInterface {
    notifications: NotificationModel[];
    setNotifications: React.Dispatch<SetStateAction<NotificationModel[]>>;
    openAddNewNotificationModal: boolean;
    setOpenAddNewNotificationModal: React.Dispatch<SetStateAction<boolean>>
}

const initNotificationConsoleContext: NotificationConsoleContextInterface = {
    notifications: [],
    setNotifications: () => null,
    openAddNewNotificationModal: false,
    setOpenAddNewNotificationModal: () => null
}

export const NotificationConsoleContext = createContext(initNotificationConsoleContext);

export const NotificationConsoleProvider = ({children} : PropsWithChildren) : JSX.Element => {
    const [notifications, setNotifications] = useState<NotificationModel[]>([]);
    const [openAddNewNotificationModal, setOpenAddNewNotificationModal] = useState<boolean>(false);

    return (
        <NotificationConsoleContext.Provider value={{
            notifications,
            setNotifications,
            openAddNewNotificationModal,
            setOpenAddNewNotificationModal
        }}>
            {children}
        </NotificationConsoleContext.Provider>
    )
}