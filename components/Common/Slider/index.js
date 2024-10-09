import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useMediaQuery } from "react-responsive";
import { ReportSlideCard, ExtendedSlideCard } from "../SlideCard";

// 定義卡片樣式，使其能夠根據父層的寬度動態調整
const SlideWrapper = styled.div`
  width: 100%;
  border-right: ${(props) => `10px solid ${props.borderColor}`};

  @media (max-width: ${globalConfig.sliderMobile}) {
    border-right: ${(props) => `8px solid ${props.borderColor}`};
  }

  .slick-slider {
    will-change: transform;
  }

  .slick-dots {
    position: absolute;
    bottom: -45px;
    height: 36px;
    overflow: hidden;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex !important;
    justify-content: center;
    align-items: center;

    @media (max-width: ${globalConfig.sliderMobile}) {
      bottom: -40px;
    }

    li {
      margin: 0 8px;

      @media (max-width: ${globalConfig.sliderMobile}) {
        margin: 0;
      }
    }

    button {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #919191;
      border: none;

      :before {
        color: transparent;
      }

      @media (max-width: ${globalConfig.sliderMobile}) {
        width: 8px;
        height: 8px;
      }
    }

    .slick-active button {
      background-color: black;
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 5;
    position: relative;
    margin: 0 0 6px 0;

    @media (max-width: ${globalConfig.sliderMobile}) {
      width: 100%;
      margin: 0 0 6px 0;
      aspect-ratio: 2 / 3;
    }
  }
`;

const OverThreeSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  swipe: true,
  touchMove: true,
  draggable: true,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3, // 三張卡片顯示
        slidesToScroll: 3, // 一次滑動三張
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2, // 兩張卡片顯示
        slidesToScroll: 2, // 一次滑動兩張
      },
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 1, // 單張卡片顯示
        slidesToScroll: 1, // 一次滑動一張
      },
    },
  ],
};

const ThreeSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  swipe: true,
  touchMove: true,
  draggable: true,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3, // 三張卡片顯示
        slidesToScroll: 3, // 一次滑動三張
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2, // 兩張卡片顯示
        slidesToScroll: 2, // 一次滑動兩張
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // 單張卡片顯示
        slidesToScroll: 1, // 一次滑動一張
      },
    },
  ],
};

function OverThreeResponsiveSlider({
  cardColor,
  bgColor,
  isReport = false,
  isSociety = false,
  sliderData = [],
  dialogContent = [],
  setDialogData,
  labelText,
}) {
  const sliderRef = useRef(null);
  const isDesktopSize = useMediaQuery({ minWidth: globalConfig.mediaQuery });
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        sliderRef.current.slickGoTo(
          sliderRef.current.innerSlider.state.currentSlide +
            (e.deltaY > 0 ? 1 : -1),
        );
      }
    };

    const sliderElement = sliderRef.current?.innerSlider.list;
    if (sliderElement && isDesktop) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement && isDesktop) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isDesktop]);

  const handleMouseDown = (e) => {
    setIsDragging(false);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (Math.abs(e.clientX - startX) > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  return (
    <SlideWrapper borderColor={bgColor}>
      <StyledSlider {...OverThreeSetting}>
        {isReport &&
          sliderData?.map((data, index) => {
            return (
              <ReportSlideCard
                key={index}
                cardColor={cardColor}
                cardData={data}
              />
            );
          })}
        {!isReport &&
          sliderData?.map((data, index) => {
            return (
              <ExtendedSlideCard
                key={index}
                cardColor={cardColor}
                cardData={data}
                labelText={labelText}
                dialogContent={dialogContent}
                setDialogData={setDialogData}
                isDragging={isDragging}
                isSociety={isSociety}
                handleMouseDown={handleMouseDown}
                handleMouseMove={handleMouseMove}
                handleMouseUp={handleMouseUp}
              />
            );
          })}
      </StyledSlider>
    </SlideWrapper>
  );
}

function UnderThreeResponsiveSlider({
  cardColor,
  bgColor,
  isReport = false,
  sliderData = [],
  dialogContent = [],
  setDialogData,
  labelText,
}) {
  const isSlideTablet = useMediaQuery({
    minWidth: globalConfig.sliderTablet,
  });

  const sliderRef = useRef(null);
  const isDesktopSize = useMediaQuery({ minWidth: globalConfig.mediaQuery });
  const [isSetThreeCard, setIsSetThreeCard] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  useEffect(() => {
    setIsSetThreeCard(isSlideTablet);
  }, [isSlideTablet]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        sliderRef.current.slickGoTo(
          sliderRef.current.innerSlider.state.currentSlide +
            (e.deltaY > 0 ? 1 : -1),
        );
      }
    };

    const sliderElement = sliderRef.current?.innerSlider.list;
    if (sliderElement && isDesktop) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement && isDesktop) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isDesktop]);

  const handleMouseDown = (e) => {
    setIsDragging(false);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (Math.abs(e.clientX - startX) > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  return (
    <SlideWrapper borderColor={bgColor}>
      <StyledSlider {...ThreeSetting}>
        {isReport &&
          sliderData?.map((data, index) => {
            return (
              <ReportSlideCard
                key={index}
                cardColor={cardColor}
                cardData={data}
              />
            );
          })}
        {!isReport &&
          sliderData?.map((data, index) => {
            return (
              <ExtendedSlideCard
                key={index}
                cardColor={cardColor}
                cardData={data}
                labelText={labelText}
                dialogContent={dialogContent}
                setDialogData={setDialogData}
                isDragging={isDragging}
                handleMouseDown={handleMouseDown}
                handleMouseMove={handleMouseMove}
                handleMouseUp={handleMouseUp}
              />
            );
          })}
        {isSetThreeCard && <div></div>}
      </StyledSlider>
    </SlideWrapper>
  );
}

export { OverThreeResponsiveSlider, UnderThreeResponsiveSlider };
