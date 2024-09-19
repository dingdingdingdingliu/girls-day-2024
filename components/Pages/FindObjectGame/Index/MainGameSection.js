import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
// import { FaCheck } from "react-icons/fa6";
// import { ListBevelLabel } from "@/components/Common/FindObjectGame/SingleBevelLabel";
import { ImageWrapper } from "@/components/Common/FindObjectGame/WrapperComponent";
import ObjectDialog from "@/components/Common/FindObjectGame/ObjectDialog";
import clickableCoordinates from "./clickableData";
import objectData from "./objectData";

const DesktopWrapper = styled.div`
  width: 85%;
  height: 100%;
  max-height: 100%;
  overflow: scroll;
  overflow: ${(props) => (props.isScroll ? "scroll" : "hidden")};

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 100%;
    height: 80%;
    max-height: 80%;
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

export default function MainGameSection({ setIsClickIdArray, isClickIdArray }) {
  const [isShowObject, setIsShowDialog] = useState(false);
  const [showObjectIndex, setShowObjectIndex] = useState(null);
  const onAreaClick = (id, order) => {
    const idExists = isClickIdArray.some((num) => num === id);
    if (idExists) return;
    setIsClickIdArray((prev) => [...prev, id]);
    setShowObjectIndex(order);
    console.log("order", order);
    setIsShowDialog(true);
  };

  return (
    <DesktopWrapper isScroll={!isShowObject}>
      <ObjectDialog
        isOpen={isShowObject}
        data={objectData[showObjectIndex]}
        setIsShowDialog={setIsShowDialog}
      />
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
                onClick={() => onAreaClick(data.id, index)}
              />
            );
          })}
        </ImageWrapper>
      </GameImageSection>
    </DesktopWrapper>
  );
}
