import styled, { DefaultTheme } from "styled-components";
import Slider, { Settings } from "react-slick";
import { useData } from "../../contexts/data";

const Container = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 600px;

  @media screen and (max-width: ${({ theme }: { theme: DefaultTheme }) =>
      theme.breakpoint.tablet}) {
    height: 400px;
  }

  @media screen and (max-width: ${({ theme }: { theme: DefaultTheme }) =>
      theme.breakpoint.mobile}) {
    height: 200px;
  }
`;

const SliderItem = styled.div<{ src: string }>`
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`;

type CarouselProps = {};

const Carousel = ({}: CarouselProps) => {
  const { banners } = useData();
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Container>
      <Slider {...settings}>
        {banners.map((banner) => (
          <SliderItem src={banner.image} />
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
