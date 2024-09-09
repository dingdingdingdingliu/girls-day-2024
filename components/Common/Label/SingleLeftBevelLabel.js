import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// slide 卡片用層
export const AbsoluteSlideLabelWrapper = styled.div`
  width: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 150px;
  }
`;

// 戲劇體驗工作訪卡片用層
export const AbsoluteLabelWrapper = styled.div`
  width: 125px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 50%;
  }
`;

// 角度內層
const BevelLabelStyle = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(7% 0, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.isPointer && "pointer"};

  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 50px;
  }
`;

const LabelContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowRightStyle = styled(MdOutlineKeyboardArrowRight)`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 28px;
  margin-right: -15px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 36px;
  }
`;

const BevelLabelText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.yellow};
  margin-right: -6px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[18]};
  }
`;

export function SingleLeftBevelLabel({
  labelText,
  onClick = null,
  isPointer = false,
}) {
  return (
    <BevelLabelStyle onClick={onClick} isPointer={isPointer}>
      <LabelContentWrapper>
        <BevelLabelText>{labelText}</BevelLabelText>
        <ArrowRightStyle />
      </LabelContentWrapper>
    </BevelLabelStyle>
  );
}
