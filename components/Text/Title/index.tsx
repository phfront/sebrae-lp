import { ReactNode } from "react";
import styled from "styled-components";

const Content = styled.h1`
    margin-bottom: 15px;
    font-size: 40px;
`;

type TitleProps = {
  children: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <Content>{children}</Content>;
};

export default Title;
