import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
	TextField,
} from '@mui/material';
import Select from '../../../core/components/Select';
import { Developer } from '../../../types';
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
} from '../helpers/UserModalHelper';
import { useUserModal } from '../hooks/useUserModal';

interface UserModalProps {
	open: boolean;
	title?: string;
	user?: Developer;
	handleClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({
	open,
	title = CREATE_NEW_USER,
	user = {} as Developer,
	handleClose,
}) => {
	const {
		userFormState,
		roles,
		statuses,
		teams,
		handleInputChange,
		handleFormSubmit,
	} = useUserModal({ user, handleClose });

	return (
		<Dialog open={open} onClose={handleClose}>
			<form onSubmit={handleFormSubmit}>
				<DialogTitle>{title}</DialogTitle>
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

export default UserModal;
