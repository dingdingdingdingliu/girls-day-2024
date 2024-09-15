import styled from "@emotion/styled";

const BevelButtonStyle = styled.div`
  background-color: ${(props) => props.buttonColor};
  clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BevelButtonText = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.textColor};
  letter-spacing: ${(props) => props.isSpacing && "2px"};
`;

const SmallBevelStyle = styled(BevelButtonStyle)`
  width: 222px;
  height: 56px;
  min-width: 222px;
  min-height: 56px;
`;

const LargeBevelButton = styled(BevelButtonStyle)`
  width: 270px;
  height: 44px;
  min-width: 270px;
  min-height: 44px;
`;

export function GameSmallBevelButton({
  buttonColor,
  textColor,
  buttonText,
  fontSize,
  isSpacing = true,
  onClick = null,
}) {
  return (
    <SmallBevelStyle buttonColor={buttonColor} onClick={onClick}>
      <BevelButtonText
        textColor={textColor}
        fontSize={fontSize}
        isSpacing={isSpacing}
      >
        {buttonText}
      </BevelButtonText>
    </SmallBevelStyle>
  );
}

export function GameFullBevelButton({
  buttonColor,
  textColor,
  buttonText,
  fontSize,
  isSpacing = false,
  onClick = null,
}) {
  return (
    <LargeBevelButton buttonColor={buttonColor} onClick={onClick}>
      <BevelButtonText
        textColor={textColor}
        fontSize={fontSize}
        isSpacing={isSpacing}
      >
        {buttonText}
      </BevelButtonText>
    </LargeBevelButton>
  );
}
