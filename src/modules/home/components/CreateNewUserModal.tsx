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
import Select from '../../../core/components/Select';
import {
	getFormattedRoles,
	getFormattedStatuses,
	getFormattedTeams,
} from '../helpers/CreateNewUserModalHelper';
import { useCreateNewUserModal } from '../hooks/useCreateNewUserModal';

interface CreateNewUserModalProps {
	open: boolean;
	handleClose: () => void;
}

const CreateNewUserModal: React.FC<CreateNewUserModalProps> = ({
	open,
	handleClose,
}) => {
	const {
		userFormState,
		roles,
		statuses,
		teams,
		handleInputChange,
		handleFormSubmit,
	} = useCreateNewUserModal({ handleClose });

	return (
		<Dialog open={open} onClose={handleClose}>
			<form onSubmit={handleFormSubmit}>
				<DialogTitle>Create new user</DialogTitle>
				<DialogContent sx={{ width: '400px' }}>
					<Stack spacing={4}>
						<TextField
							margin="dense"
							id="name"
							label="Name and surname"
							type="text"
							fullWidth
							variant="standard"
							onChange={handleInputChange('name')}
							value={userFormState.name}
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
							options={getFormattedRoles(roles)}
						/>

						<Select
							label="Status"
							id="statusId"
							value={userFormState.statusId}
							handleInputChange={handleInputChange}
							options={getFormattedStatuses(statuses)}
						/>

						<Select
							label="Team"
							id="teamId"
							value={userFormState.teamId}
							handleInputChange={handleInputChange}
							options={getFormattedTeams(teams)}
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
