import { Button } from '@mui/material';
import { useState } from 'react';
import { CREATE_NEW_USER } from '../constants';
import UserModal from './UserModal';

const CreateNewUser = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" onClick={handleClickOpen}>
				{CREATE_NEW_USER}
			</Button>
			{open && <UserModal open={open} handleClose={handleClose} />}
		</>
	);
};

export default CreateNewUser;
