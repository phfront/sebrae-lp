import { ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 20px;
`;

type TextContentProps = {
  children: ReactNode
};

const TextContent = ({ children }: TextContentProps) => {

  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default TextContent;
