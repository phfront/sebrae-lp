import styled from "styled-components";
import { useData } from "../../contexts/data";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Course = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05) rotate(-1deg);
    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease;
  }

  &:active {
    transform: scale(0.95);
    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease;
  }

  width: 250px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    flex-direction: row;
  }
`;

const CourseImage = styled.div<{ src: string }>`
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  height: 250px;
  max-height: 250px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    max-height: 100px;
  }
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.primary.color};
  color: ${({ theme }) => theme.primary.textColor};
  padding: 10px;
  flex-grow: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: flex-start;
    align-items: center;
  }
`;

type CourseListProps = {};

const CourseList = ({}: CourseListProps) => {
  const { courses, courseSearch } = useData();
  return (
    <Container>
      <Content>
        {courses
          .filter((course) => {
            if (
              courseSearch === "" ||
              course.title
                .toLowerCase()
                .includes(courseSearch.trim().toLowerCase())
            ) {
              return course;
            }
          })
          .map((course) => (
            <Course key={course.title}>
              <CourseImage src={course.image} />
              <CourseInfo>{course.title}</CourseInfo>
            </Course>
          ))}
      </Content>
    </Container>
  );
};

export default CourseList;
