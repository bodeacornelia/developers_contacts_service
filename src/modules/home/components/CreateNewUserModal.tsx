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
	CANCEL_BUTTON,
	CREATE_NEW_USER,
	DONE_BUTTON,
	EMAIL_LABEL,
	NAME_SURNAME_LABEL,
	ROLE,
	STATUS,
	TEAM,
} from '../constants';
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
				<DialogTitle>{CREATE_NEW_USER}</DialogTitle>
				<DialogContent sx={{ width: '400px' }}>
					<Stack spacing={4}>
						<TextField
							margin="dense"
							id="name"
							label={NAME_SURNAME_LABEL}
							type="text"
							fullWidth
							variant="standard"
							onChange={handleInputChange('name')}
							value={userFormState.name}
						/>
						<TextField
							margin="dense"
							id="email"
							label={EMAIL_LABEL}
							type="email"
							fullWidth
							variant="standard"
							onChange={handleInputChange('email')}
							value={userFormState.email}
						/>
						<Select
							label={ROLE}
							id="roleId"
							value={userFormState.roleId}
							handleInputChange={handleInputChange}
							options={getFormattedRoles(roles)}
						/>

						<Select
							label={STATUS}
							id="statusId"
							value={userFormState.statusId}
							handleInputChange={handleInputChange}
							options={getFormattedStatuses(statuses)}
						/>

						<Select
							label={TEAM}
							id="teamId"
							value={userFormState.teamId}
							handleInputChange={handleInputChange}
							options={getFormattedTeams(teams)}
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>{CANCEL_BUTTON}</Button>
					<Button type="submit">{DONE_BUTTON}</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default CreateNewUserModal;
