import { IconButton } from '@mui/material';
import { useState } from 'react';
import UserModal from './UserModal';
import EditIcon from '@mui/icons-material/Edit';
import { Developer } from '../../../types';

interface EditUserProps {
	user: Developer;
}

const EditUser: React.FC<EditUserProps> = ({ user }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<EditIcon />
			</IconButton>
			{open && (
				<UserModal
					open={open}
					handleClose={handleClose}
					title="Edit user"
					user={user}
				/>
			)}
		</>
	);
};

export default EditUser;
