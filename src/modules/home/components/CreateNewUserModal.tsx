import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
	TextField,
} from '@mui/material';
import React from 'react';
import Select from '../../../components/Select';
import { useCreateNewUserModal } from '../hooks/useCreateNewUserModal';
import Role from '../../../models/Role';

const teamOptions = [
	{
		label: 'Team A',
		value: 'A',
	},
	{
		label: 'Team B',
		value: 'B',
	},
	{
		label: 'Team C',
		value: 'C',
	},
];

const statusOptions = [
	{
		label: 'Full time',
		value: 'FULL_TIME',
	},
	{
		label: 'Contractor',
		value: 'CONTRACTOR',
	},
	{
		label: 'Temporarily unavailable',
		value: 'TEMP_UNAVAILABLE',
	},
];

interface CreateNewUserModalProps {
	open: boolean;
	handleClose: () => void;
}

const CreateNewUserModal: React.FC<CreateNewUserModalProps> = ({
	open,
	handleClose,
}) => {
	const { userFormState, roles, handleInputChange, handleFormSubmit } =
		useCreateNewUserModal({ handleClose });

	return (
		<Dialog open={open} onClose={handleClose}>
			<form onSubmit={handleFormSubmit}>
				<DialogTitle>Create new user</DialogTitle>
				<DialogContent sx={{ width: '400px' }}>
					<Stack spacing={4}>
						<TextField
							margin="dense"
							id="firstName"
							label="First name"
							type="text"
							fullWidth
							variant="standard"
							onChange={handleInputChange('firstName')}
							value={userFormState.firstName}
						/>
						<TextField
							margin="dense"
							id="lastName"
							label="Last name"
							type="text"
							fullWidth
							variant="standard"
							onChange={handleInputChange('lastName')}
							value={userFormState.lastName}
						/>
						<TextField
							margin="dense"
							id="email"
							label="Email address"
							type="email"
							fullWidth
							variant="standard"
							onChange={handleInputChange('email')}
							value={userFormState.email}
						/>
						<Select
							label="Role"
							id="roleId"
							value={userFormState.roleId}
							handleInputChange={handleInputChange}
							options={Role.getFormattedRoles(roles)}
						/>

						<Select
							label="Status"
							id="status"
							value={userFormState.status}
							handleInputChange={handleInputChange}
							options={statusOptions}
						/>

						<Select
							label="Team"
							id="team"
							value={userFormState.team}
							handleInputChange={handleInputChange}
							options={teamOptions}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Done</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default CreateNewUserModal;
