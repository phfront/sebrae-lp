import { useRouter } from "next/router";
import { MutableRefObject, useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import { useData } from "../../contexts/data";
import { useSideNav } from "../../contexts/sidenav";

const Container = styled.div`
  background: ${({ theme }: { theme: DefaultTheme }) => theme.primary.color};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary.textColor};
  height: 60px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1300px;
`;

const Logo = styled.div`
  width: 100px;
  height: 60px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  user-select: none;
  background-image: ${({ theme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg width='69' height='36' viewBox='0 0 69 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.1483 14.4892L37.5321 17.3092H38.7794C39.4904 17.3092 39.9555 17.2775 40.1747 17.2142C40.8057 17.0327 41.1938 16.5977 41.339 15.9064C41.3716 15.7566 41.3893 15.6241 41.3893 15.5089C41.3893 15.0624 41.1671 14.7657 40.7228 14.6159C40.4561 14.5324 40.0118 14.4892 39.3926 14.4892H38.1483ZM49.0741 19.4668H52.3329L51.85 14.662H51.7996L49.0741 19.4668ZM25.6673 19.0116L25.0688 21.7568H26.9145C28.058 21.7568 28.7275 21.3074 28.926 20.4087C28.9586 20.2704 28.9764 20.1408 28.9764 20.0227C28.9764 19.3487 28.455 19.0116 27.4122 19.0116H25.6673ZM26.6804 14.3884L26.1146 16.9578H27.6788C28.2654 16.9578 28.6653 16.9088 25.8757 16.8138C29.3408 16.5891 29.6281 16.2146 29.7407 15.6904C29.8414 15.241 29.7615 14.8982 29.5067 14.662C29.3082 14.4805 28.9705 14.3884 28.4935 14.3884H26.6804ZM21.3598 23.874L23.8927 12.3345H30.3895C30.5969 12.3518 30.7746 12.372 30.9228 12.395C31.6871 12.5333 32.2707 12.8127 32.6677 13.2304C33.0321 13.6164 33.2157 14.0801 33.2157 14.6274C33.2157 14.8204 33.1921 15.0192 33.1506 15.2208C32.8514 16.5574 31.8026 17.436 30.0073 17.8537L29.9896 17.8853C31.5538 18.1648 32.3359 18.882 32.3359 20.0371C32.3359 20.7659 32.1255 21.4255 31.7049 22.0189C31.2842 22.6123 30.7213 23.0703 30.0162 23.393C29.3111 23.7127 28.1943 23.874 26.6656 23.874H21.3598ZM0.115538 20.1264H3.4069C3.36246 20.3309 3.34172 20.498 3.34172 20.6305C3.34172 21.4342 3.89867 21.8346 5.01258 21.8346C6.17981 21.8346 6.86415 21.4169 7.05968 20.5844C7.08042 20.4836 7.09227 20.3857 7.09227 20.2964C7.09227 19.919 6.81972 19.6598 6.27165 19.5186L3.53725 18.8186C1.98489 18.4211 1.21167 17.6549 1.21167 16.5171C1.21167 16.2924 1.23833 16.0533 1.29462 15.7998C1.52273 14.8233 2.09746 14.0254 3.01584 13.4061C4.05272 12.7061 5.40363 12.3547 7.06264 12.3547C9.83852 12.3547 11.225 13.1872 11.225 14.855C11.225 15.1287 11.1805 15.4657 11.0946 15.8603H7.76476C7.81808 15.6558 7.84771 15.4858 7.84771 15.3418C7.84771 14.6706 7.42111 14.3365 6.57086 14.3365C6.09982 14.3365 5.69692 14.446 5.35919 14.6649C5.02147 14.8838 4.82002 15.1603 4.75188 15.4945C4.73114 15.5867 4.71929 15.6731 4.71929 15.7537C4.71929 16.1714 5.04221 16.4595 5.68507 16.6237L7.76476 17.1566C8.67129 17.3899 9.30527 17.6232 9.66373 17.8565C10.277 18.2425 10.5821 18.8014 10.5821 19.533C10.5821 19.7779 10.5495 20.04 10.4844 20.3252C10.2207 21.5033 9.51857 22.402 8.37208 23.0242C7.32334 23.5946 6.01984 23.8769 4.45563 23.8769C2.43519 23.8769 1.10206 23.439 0.45919 22.5662C0.154051 22.1572 0 21.6589 0 21.0712C0 20.8264 0.0385127 20.5124 0.115538 20.1264ZM10.9258 23.874L13.4706 12.372H22.4855L22.0026 14.5756H16.282L15.7487 16.9722H21.1376L20.6399 19.1758H15.251L14.7178 21.6358H20.5717L20.074 23.8711H10.9258V23.874ZM57.4403 23.874L59.9851 12.372H69L68.5171 14.5756H62.7965L62.2632 16.9722H67.6521L67.1544 19.1758H61.7655L61.2323 21.6358H67.0862L66.5885 23.8711H57.4403V23.874ZM25.7147 3.92043H47.5129L48.3246 0H26.5234L25.7147 3.92043ZM24.3815 10.007H46.1797L46.9915 6.0866H25.1933L24.3815 10.007ZM20.0207 30.1766H41.8189L42.6306 26.2562H20.8324L20.0207 30.1766ZM18.6876 36.2633H40.4858L41.2975 32.3428H19.4993L18.6876 36.2633ZM43.1698 23.874L50.4517 12.4267H54.5103L56.7056 23.8769H52.9461L52.6291 21.5782H47.8239L46.4938 23.8769L43.1698 23.874H39.5615C39.5378 23.4477 39.6 22.5835 39.7451 21.2757C39.7896 20.8177 39.8133 20.5066 39.8133 20.3367C39.8133 19.9853 39.7214 19.7375 39.5378 19.5964C39.3541 19.4524 38.9986 19.3803 38.4653 19.3803H37.067L36.0687 23.874H32.7269L35.2717 12.3691H40.8265C41.7804 12.3691 42.4114 12.3892 42.7225 12.4325C43.4749 12.539 44.0141 12.7925 44.337 13.1987C44.6363 13.5588 44.7873 14.011 44.7873 14.5525C44.7873 14.8291 44.7548 15.12 44.6866 15.4282C44.4644 16.4163 43.9371 17.1278 43.1076 17.5627C42.5654 17.8479 41.9107 18.0466 41.1464 18.1532L41.1286 18.2166C41.9937 18.2368 42.5803 18.4038 42.8913 18.7092C43.158 18.9655 43.2913 19.3947 43.2913 19.9997C43.2913 20.2013 43.2735 20.547 43.2409 21.0367C43.1372 22.4597 43.1165 23.4045 43.1698 23.874Z' fill='${theme.primary.textColor}'/%3e%3c/svg%3e ")`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media screen and (max-width: ${({ theme }: { theme: DefaultTheme }) =>
      theme.breakpoint.mobile}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary.textColor};
  user-select: none;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1px;
  height: 21px;
  background: ${({ theme }: { theme: DefaultTheme }) =>
    theme.primary.textColor};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const SignIn = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  user-select: none;
  cursor: pointer;
`;

const LogoUser = styled.div`
  width: 25px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ theme }: { theme: DefaultTheme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.6697 5.03143C16.5064 7.44778 15.7196 10.1288 13.71 11.71C17.1475 13.0742 19.5514 16.2243 19.96 19.9C20.0185 20.4461 19.6256 20.9372 19.08 21H18.97C18.4579 21.0031 18.0263 20.6189 17.97 20.11C17.5153 16.0627 14.0927 13.003 10.02 13.003C5.94725 13.003 2.52459 16.0627 2.06996 20.11C2.00921 20.6622 1.51225 21.0607 0.959962 21C0.407677 20.9392 0.00921062 20.4422 0.0699619 19.89C0.476579 16.2251 2.86706 13.0813 6.28996 11.71C4.28031 10.1288 3.49357 7.44778 4.33017 5.03143C5.16678 2.61508 7.44288 0.994465 9.99996 0.994465C12.557 0.994465 14.8331 2.61508 15.6697 5.03143ZM5.99995 6.99992C5.99995 9.20906 7.79082 10.9999 9.99995 10.9999C11.0608 10.9999 12.0782 10.5785 12.8284 9.82835C13.5785 9.0782 14 8.06078 14 6.99992C14 4.79078 12.2091 2.99992 9.99995 2.99992C7.79082 2.99992 5.99995 4.79078 5.99995 6.99992Z' fill='${theme.primary.textColor}'/%3e%3c/svg%3e "`});
`;

const SideMenuIcon = styled.div`
  display: none;
  min-width: 70px;
  height: 30px;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ theme }: { theme: DefaultTheme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='12' viewBox='0 0 20 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM19 9.99992H1C0.447715 9.99992 0 10.4476 0 10.9999C0 11.5522 0.447715 11.9999 1 11.9999H19C19.5523 11.9999 20 11.5522 20 10.9999C20 10.4476 19.5523 9.99992 19 9.99992ZM1 5.00008H19C19.5523 5.00008 20 5.4478 20 6.00008C20 6.55237 19.5523 7.00008 19 7.00008H1C0.447715 7.00008 0 6.55237 0 6.00008C0 5.4478 0.447715 5.00008 1 5.00008Z' fill='${theme.primary.textColor}'/%3e%3c/svg%3e "`});
    user-select: none;
  cursor: pointer;

@media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: inherit;
  }
`;

const SignInText = styled.span`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary.textColor};
`;

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const { menu } = useData();
  const { toggle } = useSideNav();
  const router = useRouter()

  return (
    <Container>
      <Content>
        <SideMenuIcon onClick={toggle} />
        <Logo onClick={() => router.push('/')} />
        <Right>
          <MenuList>
            {menu.map((item) => (
              <MenuItem onClick={() => router.push(item.url)} key={item.url}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
          <Divider />
          <SignIn>
            <LogoUser />
            <SignInText>Entrar</SignInText>
          </SignIn>
        </Right>
      </Content>
    </Container>
  );
};

export default Header;
