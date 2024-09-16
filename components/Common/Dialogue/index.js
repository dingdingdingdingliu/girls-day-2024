import styled from "@emotion/styled";

// 主要內容對話狀區塊
export const DialogueBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  width: 200px;
  height: 160px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 40px;
    width: 0;
    height: 0;
    border-left: 38px solid ${(props) => props.theme.colors.black};
    border-right: 38px solid transparent;
    border-top: 30px solid ${(props) => props.theme.colors.black};
    border-bottom: 30px solid transparent;
		-moz-transform:rotate(8deg);
		-webkit-transform:rotate(8deg);
		-o-transform:rotate(8deg);
		-ms-transform:rotate(8deg);
		transform:rotate(8deg);}
  }
`;

export const Dialogue = styled.p`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: pre-wrap;
`;

// 彩色對話狀區塊

export const LargeColorDialogueBox = styled.div`
	position: absolute;
	top: 0;
	left: 30px;
	background-image: ${(props) =>
    `linear-gradient(to right, 
		${props.theme.colors.lightPink} 50%, 
		${props.theme.colors.light} 80%,
		transparent 90%)
		`};
	width: 135px;
	height: 40px;

	&::after {
		content: "";
		position: absolute;
		bottom: -18px;
		left: 35px;
		width: 0;
		height: 0;
		border-left: 18px solid ${(props) => props.theme.colors.lightPink};
		border-right: 18px solid transparent;
		border-top: 12px solid ${(props) => props.theme.colors.lightPink};
		border-bottom: 12px solid transparent;
		-moz-transform:rotate(5deg);
		-webkit-transform:rotate(5deg);
		-o-transform:rotate(5deg);
		-ms-transform:rotate(5deg);
		transform:rotate(5deg);
	}
}
`;

export const SmallColorDialogueBox = styled.div`
	position: absolute;
	bottom: 20px;
	right: 28px;
		background-image: ${(props) =>
      `linear-gradient(to left, 
			${props.theme.colors.lightGreen} 40%, 
			${props.theme.colors.light} 70%,
			transparent 90%)
			`};
	width: 95px;
	height: 30px;

	&::after {
		content: "";
		position: absolute;
		bottom: -14px;
		right: 16px;
		width: 0;
		height: 0;
		border-right: 15px solid ${(props) => props.theme.colors.lightGreen};
		border-left: 15px solid transparent;
		border-top: 10px solid ${(props) => props.theme.colors.lightGreen};
		border-bottom: 10px solid transparent;
		-moz-transform:rotate(-5deg);
		-webkit-transform:rotate(-5deg);
		-o-transform:rotate(-5deg);
		-ms-transform:rotate(-5deg);
		transform:rotate(-5deg);
	}
}
`;
