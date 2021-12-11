import { useRouter } from "next/router";
import { MutableRefObject } from "react";
import styled from "styled-components";
import { useData } from "../../contexts/data";

const Container = styled.div`
  height: 290px;
  background-color: ${({ theme }) => theme.primary.color};
  color: ${({ theme }) => theme.primary.textColor};
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 0px 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 70px;
  padding: 30px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 30px;
  }
`;

const MenuList = styled.div`
  height: 100%;
`;

const MenuItemTitle = styled.div`
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
  }
`;

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const { footerMenu } = useData();
  const router = useRouter();
  return (
    <Container>
      <Content>
        <MenuContainer>
          {footerMenu.map((footerColumn) => (
            <MenuList>
              <MenuItemTitle>{footerColumn.columnLabel}</MenuItemTitle>
              {footerColumn.items.map((item) => (
                <MenuItem onClick={() => router.push(item.url)}>
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          ))}
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default Footer;
