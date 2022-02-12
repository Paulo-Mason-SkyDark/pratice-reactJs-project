import styled from "styled-components";
import { ICarton } from "../../@types/IPropsStyledComponets";


export const Carton = styled.div.attrs((props: ICarton) => ({
  width: props.width,
  height: props.height,
  color: props.color,
  radius: props.radius,
  padding: props.padding,
}))<ICarton>`


  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "70px"};
  height: ${(props) => props.height || "80px"};
  background: ${(props) => props.color || "#000"};
  border-radius: ${(props) => props.radius || "0"}
`;