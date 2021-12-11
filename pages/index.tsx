import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import CourseList from "../components/CourseList";
import Search from "../components/Search";
import styles from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Carousel />
      <Search />
      <CourseList />
    </Container>
  );
};

export default Home;
