import MaterialReactTable from 'material-react-table';
import React from 'react';
import { useDevelopersTable } from '../hooks/useDevelopersTable';
import EditUser from './EditUser';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const DevelopersTable = () => {
	const {
		columns,
		data,
		columnFilters,
		sorting,
		isLoading,
		setSorting,
		setColumnFilters,
		handleDeleteDeveloper,
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
			state={{ columnFilters, sorting, isLoading }}
			renderRowActions={({ row }) => {
				const developerId = row.original.id;
				return (
					<>
						<EditUser user={row.original} />
						<IconButton
							onClick={handleDeleteDeveloper(developerId)}
						>
							<DeleteIcon />
						</IconButton>
					</>
				);
			}}
		/>
	);
};

export default DevelopersTable;
