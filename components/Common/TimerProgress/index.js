import styled from "@emotion/styled";

export const ProgressBarWrapper = styled.div`
  width: 250px;
  height: 20px;
  min-height: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 44px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 10px;
  width: ${(props) => `${(props.seconds / 5) * 100}%`};
  transition: ${(props) => `${(props.seconds / 5) * 100} 1s linear`};
`;

export const TimerText = styled.p`
  color: ${(props) => props.theme.colors.pink};
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
