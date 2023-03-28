import {
	Box,
	Breadcrumbs,
	CircularProgress,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { useIsFetching } from 'react-query';
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

const MainAction = () => {
	const isFetching = useIsFetching();
	return (
		<Box sx={styles.mainActionsContainer}>
			<Stack direction="row" spacing={4}>
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
				{isFetching ? (
					<CircularProgress
						sx={{
							height: '25px !important',
							width: '25px !important',
						}}
					/>
				) : null}
			</Stack>

			<Box>
				<NameRandomizerButton />
				<CreateNewUser />
			</Box>
		</Box>
	);
};

export default MainAction;
