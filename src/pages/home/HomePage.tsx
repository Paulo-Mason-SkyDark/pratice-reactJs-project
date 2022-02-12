import { useState } from 'react';
import { View, Row, Width } from './style';
import {
	Button,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import Box from '../../components/box/Box';
import AddIcon from '@mui/icons-material/Add';
import Text from '../../components/text/Text';
import IconButton from '@mui/material/IconButton';
import { IStyledComponent } from '../../@types/IPropsStyledComponets';
import { Carton } from '../../components/box/style';
import { fontFamily } from '@mui/system';

const endomarketing: IStyledComponent = {
	fontSize: '2.1875em',
	lineHeight: '2.97875'
};

const endomarketingCarton: IStyledComponent = {
	fontSize: '1em',
	lineHeight: '0.052em',
	fontFamily: 'Roboto',
	fontWeight: 'bold'

};


const HomePage = () => {
	const [tipo, setTipo] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setTipo(event.target.value);
	};
	return (
		<View marginLeft="4.8875em" marginRight="4.8875em">
			<Row>
				<Text
					isTitle={true}
					content={"Endomarketing"}
					styledProps={endomarketing}
				/>
				<Width marginSide='22.5em' />
				<FormControl size="small" sx={{ m: .5, minWidth: 95, height: 38 }}>
					<InputLabel id="demo-simple-select-helper-label">TIPO</InputLabel>
					<Select
						size="small"
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={tipo}
						label="Tipo"
						onChange={handleChange}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={""}>Ten</MenuItem>
						<MenuItem value={""}>Twenty</MenuItem>
						<MenuItem value={""}>Thirty</MenuItem>
					</Select>
				</FormControl>
				<Button sx={{ m: .5, width: 103, height: 38 }} size="large" variant="contained" endIcon={<IconButton aria-label="add" size="large" sx={{ color: "white" }}>
					<AddIcon />
				</IconButton>}>
					Criar
				</Button>
				<Width marginSide='1.96875em' />
				<Carton
					padding="1.5em"
					width="17.4375em"
					height="19.3125em"
					color="#FFF2DE">
					<Text
						isTitle={true}
						content={"Endormarketing"}
						styledProps={endomarketingCarton}

					/>
					<Text
						content={"Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes."}
					/>
				</Carton>
			</Row>
		</View>
	);
}

export default HomePage;