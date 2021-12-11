import { ReactNode } from "react";
import styled from "styled-components";

const Content = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <Content>{children}</Content>;
};

export default Paragraph;
