import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => (
	<AppBar position="static">
		<Toolbar>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="open drawer"
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
			<Typography
				variant="h4"
				component="div"
				sx={{
					flexGrow: 1,
				}}
			>
				Developers Contacts
			</Typography>
			<Box>
				<IconButton size="large" aria-label="search" color="inherit">
					<SearchIcon />
				</IconButton>
				<IconButton
					size="large"
					aria-label="display more actions"
					edge="end"
					color="inherit"
				>
					<MoreIcon />
				</IconButton>
			</Box>
		</Toolbar>
	</AppBar>
);

export default TopBar;
