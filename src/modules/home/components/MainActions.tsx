import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import React from 'react';
import { PAGE_TITLE } from '../constants';
import CreateNewUser from './CreateNewUser';
import NameRandomizerButton from './NameRandomizerButton';

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
				Dashboard
			</Link>
			<Link
				underline="hover"
				color="inherit"
				href="/material-ui/getting-started/installation/"
			>
				{PAGE_TITLE}
			</Link>
			<Typography color="text.primary">View All</Typography>
		</Breadcrumbs>
		<Box>
			<NameRandomizerButton />
			<CreateNewUser />
		</Box>
	</Box>
);

export default MainAction;
