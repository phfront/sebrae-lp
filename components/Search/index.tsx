import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { useData } from "../../contexts/data";

const Container = styled.div`
  /* background: ${({ theme }) => theme.primary.color}; */
  display: flex;
  justify-content: center;
  height: 40px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  padding: 0px 20px;
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  outline: ${({ theme }) => `1px solid ${theme.body.textColor}`};
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 600px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.body.textColor};
  padding: 0 10px;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.body.textColor};
  }
`;

const Button = styled.button`
  width: 92px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  background: ${({ theme }) => theme.primary.color};
  color: ${({ theme }) => theme.primary.textColor};
  outline: none;
  border: none;
  border-radius: 5px;
  transform: scale(1.05);
  cursor: pointer;
  user-select: none;
`;

const IconSearch = styled.div`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ theme }) =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.9999 10.0733L13.4733 12.5267C13.723 12.7851 13.723 13.1949 13.4733 13.4533C13.3481 13.5795 13.1777 13.6505 12.9999 13.6505C12.8222 13.6505 12.6518 13.5795 12.5266 13.4533L10.0733 11C7.58771 12.9935 3.97746 12.6965 1.85104 10.3237C-0.275377 7.95084 -0.176291 4.32976 2.07671 2.07676C4.32971 -0.176238 7.95079 -0.275324 10.3236 1.8511C12.6965 3.97751 12.9934 7.58776 10.9999 10.0733ZM1.66661 6.33333C1.66661 8.91066 3.75595 11 6.33328 11C7.57096 11 8.75794 10.5083 9.63311 9.63316C10.5083 8.75799 10.9999 7.57101 10.9999 6.33333C10.9999 3.756 8.91061 1.66667 6.33328 1.66667C3.75595 1.66667 1.66661 3.756 1.66661 6.33333Z' fill='${theme.primary.textColor}'/%3e%3c/svg%3e")`};
`;

type SearchProps = {};

const Search = ({}: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const { setCourseSearch } = useData();

  return (
    <Container>
      <Content>
        <InputGroup>
          <Input
            placeholder="Digite aqui sua pesquisa"
            value={search}
            onChange={(event: any) => {
              setSearch(event.target.value);
            }}
            onKeyDown={(event: KeyboardEvent) => {
              if (event.key === "Enter") {
                const input = event.target as HTMLInputElement;
                setCourseSearch(input.value);
              }
            }}
          />
          <Button onClick={() => setCourseSearch(search)}>
            <IconSearch />
            Buscar
          </Button>
        </InputGroup>
      </Content>
    </Container>
  );
};

export default Search;
