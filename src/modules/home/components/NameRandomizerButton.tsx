import { Button } from '@mui/material';
import React from 'react';
import { useResourceListQuery } from '../../../core/hooks/useAPIQuery';
import { Developer } from '../../../types';
import { DEVELOPER_RESOURCE } from '../hooks/useDevelopersTable';

const NameRandomizerButton = () => {
	const { refetch } = useResourceListQuery<Developer>(
		DEVELOPER_RESOURCE,
		{
			sort: 'RANDOM',
		},
		{
			enabled: false,
		}
	);

	const handleButtonClick = () => {
		refetch();
	};

	return <Button onClick={handleButtonClick}>Name Randomizer</Button>;
};

export default NameRandomizerButton;
