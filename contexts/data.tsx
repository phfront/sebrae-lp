import { createContext, useContext, ReactNode, useState } from "react";

type MenuItem = {
  label: string;
  url: string;
};

type Banner = {
  image: string;
  url: string;
};

type Course = {
  title: string;
  image: string;
  url: string;
};

type FooterMenuColumn = {
  columnLabel: string;
  items: MenuItem[];
};

type DataContextType = {
  menu: MenuItem[];
  setMenu: (data: MenuItem[]) => void;
  banners: Banner[];
  setBanners: (data: Banner[]) => void;
  courses: Course[];
  setCourses: (data: Course[]) => void;
  courseSearch: string,
  setCourseSearch: (data: string) => void,
  footerMenu: FooterMenuColumn[];
  setFooterMenu: (data: FooterMenuColumn[]) => void;
};

const dataContextDefaultValues: DataContextType = {
  menu: [],
  setMenu: () => {},
  banners: [],
  setBanners: () => {},
  courses: [],
  setCourses: () => {},
  courseSearch: "",
  setCourseSearch: () => {},
  footerMenu: [],
  setFooterMenu: () => {},
};

const DataContext = createContext<DataContextType>(dataContextDefaultValues);

export function useData() {
  return useContext(DataContext);
}

type Props = {
  children: ReactNode;
};

export function DataProvider({ children }: Props) {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseSearch, setCourseSearch] = useState<string>("");
  const [footerMenu, setFooterMenu] = useState<FooterMenuColumn[]>([]);

  const value = {
    menu,
    setMenu,
    banners,
    setBanners,
    courses,
    setCourses,
    footerMenu,
    setFooterMenu,
    courseSearch,
    setCourseSearch
  };

  return (
    <>
      <DataContext.Provider value={value}>{children}</DataContext.Provider>
    </>
  );
}
