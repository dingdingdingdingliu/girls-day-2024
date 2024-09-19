import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { MdAccessTime } from "react-icons/md";
import { ImSearch } from "react-icons/im";

const LabelWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 14px;
  right: 14px;
  z-index: 19;
`;

const TimeBevelLabelStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 118px;
  height: 50px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 78px;
    height: 32px;
  }
`;

const CountBevelLabelStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(7% 0, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 78px;
    height: 32px;
  }
`;

const BevelButtonText = styled.div`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  letter-spacing: ${(props) => props.isSpacing && "2px"};

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

const StyledMdAccessTime = styled(MdAccessTime)`
  color: ${(props) => props.theme.colors.green};
  font-size: 28px;
  margin-right: 10px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: 20px;
    margin-right: 6px;
  }
`;

const StyledImSearch = styled(ImSearch)`
  color: ${(props) => props.theme.colors.green};
  font-size: 22px;
  margin-right: 8px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: 16px;
    margin-right: 4px;
  }
`;

export default function GameBevelLabel({ countdownTime, findCount }) {
  return (
    <LabelWrapper>
      <TimeBevelLabelStyle>
        <StyledMdAccessTime />
        <BevelButtonText>{countdownTime}</BevelButtonText>
      </TimeBevelLabelStyle>
      <CountBevelLabelStyle>
        <StyledImSearch />
        <BevelButtonText>{`${findCount}/12`}</BevelButtonText>
      </CountBevelLabelStyle>
    </LabelWrapper>
  );
}
