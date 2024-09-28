import styled from "@emotion/styled";
import useViewport from "@/hooks/useViewPort";

const StyledDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const ResponsiveContainer = ({
  children,
  heightUnit,
  widthUnit,
  as = "div",
}) => {
  const { vh, vw } = useViewport();

  const computedStyle = {
    height:
      heightUnit !== undefined
        ? vh
          ? `${vh * heightUnit}px`
          : `${heightUnit}vh`
        : "auto",
    width:
      widthUnit !== undefined
        ? vw
          ? `${vw * widthUnit}px`
          : `${widthUnit}vw`
        : "auto",
  };

  return (
    <StyledDiv as={as} style={computedStyle}>
      {children}
    </StyledDiv>
  );
};

export default ResponsiveContainer;
