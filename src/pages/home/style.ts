import styled from 'styled-components';
import { ViewStyle, WidthStyle} from '../../@types/IPropsStyledComponets';

export const View = styled.div.attrs((props: ViewStyle) => ({
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    width: props.width,
    height: props.height,
}))<ViewStyle>`

    margin-top: 1em;
    margin-left: ${(props) => props.marginLeft ||  "0"};
    margin-right: ${(props) => props.marginRight || "0"};
    width: ${(props) => props.width || null};
    height: ${(props) => props.height || null};

`;

export const Row = styled.div`
 
    display: flex;
    align-items: baseline;
    flex-direction: row;

`;

export const Column = styled.div`

    display: flex;
    align-items: center;
    align-items: baseline;
    flex-direction: column;

`;


export const Width = styled.div.attrs((props: WidthStyle) => ({
    marginSide: props.marginSide,
})) <WidthStyle>`

    margin: 0 ${(props) => props.marginSide || "0"}

`