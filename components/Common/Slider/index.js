import React, { useEffect, useState } from "react";
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

  .slick-dots {
    position: absolute;
    bottom: -30px;
  }

  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  swipe: true,
  touchMove: true,
  draggable: true,
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
  isShowLabel,
  isReport = false,
  sliderData = [],
  dialogContent = [],
  setDialogData,
  setIsDialogOpen,
}) {
  return (
    <SlideWrapper>
      <StyledSlider {...OverThreeSetting}>
        {isReport &&
          sliderData?.map((data, index) => {
            return (
              <ReportSlideCard
                key={index}
                cardColor={cardColor}
                isShowLabel={isShowLabel}
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
                isShowLabel={isShowLabel}
                cardData={data}
                dialogContent={dialogContent}
                setDialogData={setDialogData}
                setIsDialogOpen={setIsDialogOpen}
              />
            );
          })}
      </StyledSlider>
    </SlideWrapper>
  );
}

function UnderThreeResponsiveSlider({
  cardColor,
  isShowLabel,
  isReport = false,
  sliderData = [],
  dialogContent = [],
  setDialogData,
  setIsDialogOpen,
}) {
  const isSlideTablet = useMediaQuery({
    minWidth: globalConfig.sliderTablet,
  });

  const [isSetThreeCard, setIsSetThreeCard] = useState(true);

  useEffect(() => {
    setIsSetThreeCard(isSlideTablet);
  }, [isSlideTablet]);

  return (
    <SlideWrapper>
      <StyledSlider {...ThreeSetting}>
        {isReport &&
          sliderData?.map((data, index) => {
            return (
              <ReportSlideCard
                key={index}
                cardColor={cardColor}
                isShowLabel={isShowLabel}
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
                isShowLabel={isShowLabel}
                cardData={data}
                dialogContent={dialogContent}
                setDialogData={setDialogData}
                setIsDialogOpen={setIsDialogOpen}
              />
            );
          })}
        {isSetThreeCard && <div></div>}
      </StyledSlider>
    </SlideWrapper>
  );
}

export { OverThreeResponsiveSlider, UnderThreeResponsiveSlider };
