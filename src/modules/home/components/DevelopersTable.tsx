import MaterialReactTable from 'material-react-table';
import React from 'react';
import { useDevelopersTable } from '../hooks/useDevelopersTable';
import EditUser from './EditUser';

const DevelopersTable = () => {
	const {
		columns,
		data,
		columnFilters,
		sorting,
		isLoading,
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
			state={{ columnFilters, sorting, isLoading }}
			renderRowActions={({ row }) => <EditUser user={row.original} />}
		/>
	);
};

export default DevelopersTable;
