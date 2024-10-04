import styled from "@emotion/styled";
import { css } from "@emotion/react";
import globalConfig from "@/styles/globalConfig";
import {
  LuArrowBigUpDash,
  LuArrowBigDownDash,
  LuArrowBigRightDash,
  LuArrowBigLeftDash,
} from "react-icons/lu"; // 箭頭icon
import { TbHandFinger } from "react-icons/tb"; // 指頭 icon

const ArrowStyles = (props) => css`
  color: ${props.theme.colors.white};
  font-size: 40px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: 28px;
  }
`;

export const ArrowUp = styled(LuArrowBigUpDash)`
  ${(props) => ArrowStyles(props)};
`;

export const ArrowDown = styled(LuArrowBigDownDash)`
  ${(props) => ArrowStyles(props)};
`;

export const ArrowRight = styled(LuArrowBigRightDash)`
  ${(props) => ArrowStyles(props)};
`;

export const ArrowLeft = styled(LuArrowBigLeftDash)`
  ${(props) => ArrowStyles(props)};
`;

export const HandFinger = styled(TbHandFinger)`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: 24px;
  }
`;
