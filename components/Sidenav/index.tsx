import styled, { DefaultTheme } from "styled-components";
import { useData } from "../../contexts/data";
import { useSideNav } from "../../contexts/sidenav";

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? 0 : "-100vw")};
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  transition: all 0.2s ease;
`;

const Content = styled.div`
  background: ${({ theme }: { theme: DefaultTheme }) => theme.primary.color};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary.textColor};
  min-width: 250px;
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BackDrop = styled.div`
  flex-grow: 1;
  cursor: pointer;
`;

const SideNavHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SideMenuIcon = styled.div`
  min-width: 70px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ theme }: { theme: DefaultTheme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='12' viewBox='0 0 20 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM19 9.99992H1C0.447715 9.99992 0 10.4476 0 10.9999C0 11.5522 0.447715 11.9999 1 11.9999H19C19.5523 11.9999 20 11.5522 20 10.9999C20 10.4476 19.5523 9.99992 19 9.99992ZM1 5.00008H19C19.5523 5.00008 20 5.4478 20 6.00008C20 6.55237 19.5523 7.00008 19 7.00008H1C0.447715 7.00008 0 6.55237 0 6.00008C0 5.4478 0.447715 5.00008 1 5.00008Z' fill='${theme.primary.textColor}'/%3e%3c/svg%3e "`});
    user-select: none;
  cursor: pointer;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MenuItem = styled.div`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary.textColor};
  user-select: none;
  cursor: pointer;
  padding: 10px 0;
  font-weight: bold;
  font-size: 18px;
`;

type SideNavProps = {};

const SideNav = ({}: SideNavProps) => {
  const { open, toggle } = useSideNav();
  const { menu } = useData();

  return (
    <Container open={open}>
      <Content>
        <SideNavHeader>
          <SideMenuIcon onClick={toggle} />
        </SideNavHeader>
        <MenuList>
        {menu.map((item) => (
              <MenuItem key={item.url}>{item.label}</MenuItem>
            ))}
        </MenuList>
      </Content>
      <BackDrop onClick={toggle} />
    </Container>
  );
};

export default SideNav;
