import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
} from '@mui/material';
import React from 'react';

interface SelectProps {
	id: string;
	label: string;
	value: string | number;
	options: { label: string; value: string | number }[];
	handleInputChange: (name: string) => (event: any) => void;
}

const Select: React.FC<SelectProps> = ({
	id,
	label,
	value,
	handleInputChange,
	options,
}) => (
	<FormControl fullWidth>
		<InputLabel id={id}>{label}</InputLabel>
		<MuiSelect
			labelId={id}
			id={id}
			value={value}
			label={label}
			onChange={handleInputChange(id)}
		>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</MuiSelect>
	</FormControl>
);

export default Select;
