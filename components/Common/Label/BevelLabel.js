import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

export const AbsoluteLabelWrapper = styled.div`
  width: 27%;
  position: absolute;
  top: 0;
  left: 0;
`;

const BevelLabelStyle = styled.div`
  width: 100%;
  height: 82px;
  background-color: ${(props) => props.buttonColor};
  clip-path: polygon(0 0, 100% 0%, 93% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 200px;
    height: 50px;
    padding-right: 16px;
  }
`;

const BevelLabelText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[40]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.textColor};
  letter-spacing: 8px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[26]};
    letter-spacing: 4px;
  }
`;

export function BevelLabel({ buttonColor, textColor, labelText }) {
  return (
    <BevelLabelStyle buttonColor={buttonColor}>
      <BevelLabelText textColor={textColor}>{labelText}</BevelLabelText>
    </BevelLabelStyle>
  );
}
