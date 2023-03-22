import { Box, IconButton } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDevelopersTable } from '../hooks/useDevelopersTable';

const DevelopersTable = () => {
	const {
		columns,
		data,
		columnFilters,
		sorting,
		setSorting,
		setColumnFilters,
	} = useDevelopersTable();

	return (
		<MaterialReactTable
			columns={columns}
			data={data}
			enableRowActions
			positionActionsColumn="last"
			enableGlobalFilter={false}
			manualFiltering
			manualSorting
			onSortingChange={setSorting}
			onColumnFiltersChange={setColumnFilters}
			state={{ columnFilters, sorting }}
			renderRowActions={({ row }) => (
				<Box>
					<IconButton onClick={() => console.info('Edit')}>
						<EditIcon />
					</IconButton>
					<IconButton onClick={() => console.info('Delete')}>
						<DeleteIcon />
					</IconButton>
				</Box>
			)}
		/>
	);
};

export default DevelopersTable;
