import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled, { DefaultTheme, useTheme } from "styled-components";
import SideNav from "../Sidenav";
import { useData } from "../../contexts/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  flex-grow: 1;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const data = useData();

  useEffect(() => {
    data.setMenu([
      {
        label: "Cursos",
        url: "/cursos",
      },
      {
        label: "Fale Conosco",
        url: "/fale-conosco",
      },
    ]);
    data.setBanners([
      { image: "https://via.placeholder.com/1500x500", url: "" },
      { image: "https://via.placeholder.com/1501x500", url: "" },
      { image: "https://via.placeholder.com/1502x500", url: "" },
      { image: "https://via.placeholder.com/1503x500", url: "" },
      { image: "https://via.placeholder.com/1504x500", url: "" },
    ]);
    data.setCourses([
      { title: "Id sunt qui excepteur ipsum reprehenderit nulla ullamco incididunt cillum consectetur officia nostrud.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Occaecat esse et dolore quis non aliqua incididunt qui laboris laborum qui sit occaecat laborum.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Non et nostrud officia dolor labore incididunt velit nisi.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Ea ea excepteur reprehenderit ea dolore est incididunt ullamco nisi aute pariatur Lorem nisi.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "In dolor dolor ipsum sit nulla consectetur eiusmod cupidatat do reprehenderit voluptate magna aute.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Magna velit anim dolor nostrud consectetur magna officia eu esse cillum adipisicing velit.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Tempor irure adipisicing ipsum pariatur.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Consectetur laboris esse laboris ea reprehenderit ipsum in irure.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Eiusmod exercitation aliqua commodo qui do.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Consequat elit commodo qui minim officia exercitation qui culpa voluptate.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Occaecat esse proident velit eiusmod.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Ut pariatur aliqua duis magna qui aliquip occaecat.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Ullamco esse quis tempor voluptate anim mollit sunt velit.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "In occaecat irure non tempor aliqua cillum reprehenderit proident nostrud ut qui esse ipsum cupidatat.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Aliqua laborum occaecat commodo eiusmod exercitation adipisicing eu non adipisicing est ea ullamco ad.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Ut aliqua aute consectetur fugiat.", image: "https://via.placeholder.com/500x500", url: "" },
      { title: "Proident qui aute sint eiusmod proident magna est ullamco elit adipisicing quis aliquip excepteur.", image: "https://via.placeholder.com/500x500", url: "" },
    ]);
    data.setFooterMenu([
      {
        columnLabel: "Sobre o Sebrae",
        items: [
          { label: "Conheça o Sebrae", url: "conheca-o-sebrae" }
        ]
      },
      {
        columnLabel: "Institucional",
        items: [
          { label: "Trabalhe no Sebrae", url: "trabalhe-conosco" }
        ]
      },
      {
        columnLabel: "Fale Conosco",
        items: [
          { label: "Suporte ao Usuário", url: "fale-conosco" }
        ]
      }
    ]);
  }, []);

  return (
    <Container>
      <SideNav />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
