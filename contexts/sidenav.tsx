import { createContext, useContext, ReactNode, useState } from "react";

type sidenavContextType = {
    open: boolean;
    toggle: () => void;
};

const authContextDefaultValues: sidenavContextType = {
    open: false,
    toggle: () => {},
};

const SideNavContext = createContext<sidenavContextType>(authContextDefaultValues);

export function useSideNav() {
    return useContext(SideNavContext);
}

type Props = {
    children: ReactNode;
};

export function SideNavProvider({ children }: Props) {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    const value = {
        open,
        toggle
    };

    return (
        <>
            <SideNavContext.Provider value={value}>
                {children}
            </SideNavContext.Provider>
        </>
    );
}