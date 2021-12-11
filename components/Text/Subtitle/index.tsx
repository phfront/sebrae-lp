import { ReactNode } from "react";
import styled from "styled-components";

const Content = styled.h2`
  margin-bottom: 15px;
  font-size: 27px;
`;

type SubTitleProps = {
  children: ReactNode;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return <Content>{children}</Content>;
};

export default SubTitle;
