import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

// Find Object List 用底層
export const AbsoluteListLabelWrapper = styled.div`
  width: 80%;
  height: 36px;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 100px;
    height: 28px;
  }
`;

// Find Object List 角度內層
const ListLabelWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(0 0, 100% 0%, 93% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 6px 0px;
  border-radius: 1px;
`;

const BevelLabelText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  white-space: nowrap;
  letter-spacing: 4px;
  margin-right: 12px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

const BevelLabelCount = styled.p`
  font-size: ${(props) => props.theme.fontSizes[12]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  white-space: nowrap;
  letter-spacing: 2px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[12]};
  }
`;

export function ListBevelLabel({ listText, count = 0 }) {
  return (
    <AbsoluteListLabelWrapper>
      <ListLabelWrapper>
        <BevelLabelText>{listText}</BevelLabelText>
        <BevelLabelCount>{`${count}/4`}</BevelLabelCount>
      </ListLabelWrapper>
    </AbsoluteListLabelWrapper>
  );
}
