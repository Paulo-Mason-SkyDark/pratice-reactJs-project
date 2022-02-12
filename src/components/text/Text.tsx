import { IStyledComponent } from '../../@types/IPropsStyledComponets';
import { Title, Paragraph } from './style';

interface IText {
	content?: string;
	isTitle?: boolean;
	styledProps?: IStyledComponent;
}

const Text = (props: IText) => {
	return <>
		{
			props.isTitle ?
				<Title
					fontSize={props.styledProps?.fontSize}
					fontWeight={props.styledProps?.fontWeight}
					lineHeight={props.styledProps?.lineHeight}
				>
					{props.content}
				</Title>
				:
				<Paragraph>
					{props.content}
				</Paragraph>}
	</>
}

export default Text;