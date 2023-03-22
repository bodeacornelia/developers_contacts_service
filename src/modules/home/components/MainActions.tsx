import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import React from 'react';
import CreateNewUser from './CreateNewUser';

const styles = {
	mainActionsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '28px',
	},
};

const MainAction = () => (
	<Box sx={styles.mainActionsContainer}>
		<Breadcrumbs aria-label="breadcrumb">
			<Link underline="hover" color="inherit" href="/">
				MUI
			</Link>
			<Link
				underline="hover"
				color="inherit"
				href="/material-ui/getting-started/installation/"
			>
				Core
			</Link>
			<Typography color="text.primary">Breadcrumbs</Typography>
		</Breadcrumbs>
		<CreateNewUser />
	</Box>
);

export default MainAction;
