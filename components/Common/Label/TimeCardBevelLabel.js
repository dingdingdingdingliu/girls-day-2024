import styled from "@emotion/styled";

export const AbsoluteLabelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const BevelLabelStyle = styled.div`
  float: left;
  background-color: ${(props) => props.labelColor};
  clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 24px;
`;

const BevelLabelText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;
  white-space: nowrap;
`;

export default function TimeCardBevelLabel({ labelColor, labelText }) {
  return (
    <AbsoluteLabelWrapper>
      <BevelLabelStyle labelColor={labelColor}>
        <BevelLabelText>{labelText}</BevelLabelText>
      </BevelLabelStyle>
    </AbsoluteLabelWrapper>
  );
}
