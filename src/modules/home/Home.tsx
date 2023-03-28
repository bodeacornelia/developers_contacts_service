import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import MainAction from './components/MainActions';
import DevelopersTable from './components/DevelopersTable';

const Home = () => (
	<Box>
		<TopBar />
		<MainAction />
		<DevelopersTable />
	</Box>
);

export default Home;
