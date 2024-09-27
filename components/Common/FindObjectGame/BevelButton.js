import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

const BevelButtonStyle = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 222px;
  height: 58px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    margin-bottom: 14px;
  }
`;

const BevelButtonText = styled.div`
  font-size: ${(props) => props.theme.fontSizes[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  letter-spacing: ${(props) => props.isSpacing && "2px"};
`;

export default function FindObjectGameBevelButton({
  buttonText,
  isSpacing = false,
  onClick = null,
}) {
  return (
    <BevelButtonStyle onClick={onClick}>
      <BevelButtonText isSpacing={isSpacing}>{buttonText}</BevelButtonText>
    </BevelButtonStyle>
  );
}
