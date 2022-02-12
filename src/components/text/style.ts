import styled from 'styled-components';
import { IStyledComponent } from '../../@types/IPropsStyledComponets';



export const Title = styled.h1.attrs((props: IStyledComponent) => ({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    fontFamily: props.fontFamily,
}))<IStyledComponent>`

    width: 0;
    height: 0;
    font-weight: ${(props) => props.fontWeight || "300"};
    font-size: ${(props) => props.fontSize || "2.1875em"};
    line-height: ${(props) => props.lineHeight || "0"};
    font-family: ${(props) => props.fontFamily || 'Roboto'} ;
    color: #707070;


`;

export const Paragraph = styled.p.attrs((props: IStyledComponent) => ({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
}))<IStyledComponent>`

font-weight: ${(props: IStyledComponent) => props?.fontWeight || "300"};
font-size: ${(props: IStyledComponent) => props?.fontSize || "2.1875em"};
line-height: ${(props: IStyledComponent) => props?.lineHeight || "3em"};
color: #707070;


// `;