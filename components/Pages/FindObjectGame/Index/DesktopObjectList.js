import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { ListBevelLabel } from "@/components/Common/FindObjectGame/SingleBevelLabel";
import { ImageWrapper } from "@/components/Common/FindObjectGame/WrapperComponent";
import objectData from "./objectData";

const peopleIdArray = [1, 2, 3, 4];
const placeIdArray = [5, 6, 7, 8];
const eventIdArray = [9, 10, 11, 12];

const DesktopWrapper = styled.div`
  width: 10%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 16px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    display: none;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  padding: 48px 12px 10px 10px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 2px;
  margin-bottom: ${(props) => (props.isLast ? "0px" : "20px")};
  position: relative;
`;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  border: ${(props) =>
    props.isCheck ? `6px solid ${props.theme.colors.green};` : "none"};
  margin-bottom: ${(props) => (props.index < 3 ? "10px" : "0px")};
  border-radius: 2px;
  position: relative;
  box-shadow:
    -1px -1px 4px rgba(0, 0, 0, 0.1),
    4px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const IsCheckMark = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 25%;
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.theme.colors.green};
  display: ${(props) => (props.isCheck ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const StyledFaCheck = styled(FaCheck)`
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
`;

export default function DesktopObjectList({ isClickIdArray, scrollToId }) {
  const peopleRef = useRef(null);
  const placeRef = useRef(null);
  const eventRef = useRef(null);
  const peopleFindIds = isClickIdArray.filter((id) =>
    peopleIdArray.includes(id),
  );
  const placeFindIds = isClickIdArray.filter((id) => placeIdArray.includes(id));
  const eventFindIds = isClickIdArray.filter((id) => eventIdArray.includes(id));

  // 當 scrollToId 改變時，觸發滾動動畫
  useEffect(() => {
    if (scrollToId === "people") {
      peopleRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollToId === "place") {
      placeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollToId === "event") {
      eventRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

  return (
    <DesktopWrapper>
      <ListWrapper ref={peopleRef} isLast={false}>
        <ListBevelLabel listText="人物" count={peopleFindIds.length} />
        {objectData.slice(0, 4).map((data, index) => {
          const isCheck = isClickIdArray.some((id) => id === data.id);
          return (
            <ListItem key={index} index={index} isCheck={isCheck}>
              <ImageWrapper>
                <Image
                  src={data.imageSrc}
                  alt={data.alt}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
              <IsCheckMark isCheck={isCheck}>
                <StyledFaCheck />
              </IsCheckMark>
            </ListItem>
          );
        })}
      </ListWrapper>
      <ListWrapper ref={placeRef} isLast={false}>
        <ListBevelLabel listText="地點" count={placeFindIds.length} />
        {objectData.slice(4, 8).map((data, index) => {
          const isCheck = isClickIdArray.some((id) => id === data.id);
          return (
            <ListItem key={index} index={index} isCheck={isCheck}>
              <ImageWrapper>
                <Image
                  src={data.imageSrc}
                  alt={data.alt}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
              <IsCheckMark isCheck={isCheck}>
                <StyledFaCheck />
              </IsCheckMark>
            </ListItem>
          );
        })}
      </ListWrapper>
      <ListWrapper ref={eventRef} isLast={true}>
        <ListBevelLabel listText="事件" count={eventFindIds.length} />
        {objectData.slice(8).map((data, index) => {
          const isCheck = isClickIdArray.some((id) => id === data.id);
          return (
            <ListItem key={index} index={index} isCheck={isCheck}>
              <ImageWrapper>
                <Image
                  src={data.imageSrc}
                  alt={data.alt}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
              <IsCheckMark isCheck={isCheck}>
                <StyledFaCheck />
              </IsCheckMark>
            </ListItem>
          );
        })}
      </ListWrapper>
    </DesktopWrapper>
  );
}
