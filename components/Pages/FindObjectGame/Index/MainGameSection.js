import { useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "@/components/Common/FindObjectGame/WrapperComponent";
import ObjectDialog from "@/components/Common/FindObjectGame/ObjectDialog";
import clickableCoordinates from "./clickableData";
import objectData from "./objectData";

const getScrollTo = (id) => {
  let scrollTo;
  if (id >= 1 && id <= 4) {
    scrollTo = "people";
  } else if (id >= 5 && id <= 8) {
    scrollTo = "place";
  } else if (id >= 9 && id <= 12) {
    scrollTo = "event";
  } else {
    scrollTo = "people";
  }
  return scrollTo;
};

const DesktopWrapper = styled.div`
  width: 85%;
  height: 100%;
  max-height: 100%;
  overflow: scroll;
  overflow: ${(props) => (props.isScroll ? "scroll" : "hidden")};

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 100%;
    height: 75%;
    max-height: 75%;
  }
`;

const GameImageSection = styled.div`
  height: 873px;
  width: 1254px;
  min-height: 873px;
  min-width: 1254px;
  position: relative;
  margin: 0 auto;
`;

const ClickableArea = styled.div`
  position: absolute;
  border: 4px solid orange;
  cursor: pointer;
  top: ${(props) => `${props.data.top}px`};
  left: ${(props) => `${props.data.left}px`};
  width: ${(props) => `${props.data?.right - props.data?.left}px`};
  height: ${(props) => `${props.data?.bottom - props.data?.top}px`};
`;

export default function MainGameSection({
  setIsClickIdArray,
  isClickIdArray,
  setScrollToId,
  setFindCount,
  isShowObject,
  setIsShowObject,
}) {
  const [showObjectIndex, setShowObjectIndex] = useState(null);
  const onAreaClick = (id, order, scrollTo) => {
    const idExists = isClickIdArray.some((num) => num === id);
    if (idExists) return;
    setIsClickIdArray((prev) => [...prev, id]);
    setShowObjectIndex(order);
    setIsShowObject(true);
    setScrollToId(scrollTo);
    setFindCount((prev) => prev + 1);
  };

  return (
    <DesktopWrapper isScroll={!isShowObject}>
      {isShowObject && (
        <ObjectDialog
          isOpen={isShowObject}
          data={objectData[showObjectIndex]}
          setIsShowDialog={setIsShowObject}
        />
      )}
      <GameImageSection>
        <ImageWrapper>
          <Image
            src="/images/findObjectGame/main_game_test.png"
            alt="find-object-game"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          {clickableCoordinates.map((data, index) => {
            return (
              <ClickableArea
                key={index}
                data={data}
                onClick={() =>
                  onAreaClick(data.id, index, getScrollTo(data.id))
                }
              />
            );
          })}
        </ImageWrapper>
      </GameImageSection>
    </DesktopWrapper>
  );
}
