import { Button } from '@mui/material';
import React, { useState } from 'react';
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
				Create new user
			</Button>
			{open && (
				<CreateNewUserModal open={open} handleClose={handleClose} />
			)}
		</>
	);
};

export default CreateNewUser;
