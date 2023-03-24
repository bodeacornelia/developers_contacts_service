import { Button } from '@mui/material';
import React, { useState } from 'react';
import { CREATE_NEW_USER } from '../constants';
import CreateNewUserModal from './CreateNewUserModal';

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
			{open && (
				<CreateNewUserModal open={open} handleClose={handleClose} />
			)}
		</>
	);
};

export default CreateNewUser;
