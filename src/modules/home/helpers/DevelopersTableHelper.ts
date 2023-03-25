import { MRT_ColumnFiltersState, MRT_SortingState } from 'material-react-table';
import { TEAM } from '../constants';

export const developersTableColumns = [
	{
		accessorKey: 'name',
		header: 'Name',
		Cell: ({ row }: { row: any }) => {
			const isTheFirstEntry = row.id === '0';
			const originalCellValue = row.original.name;
			return isTheFirstEntry
				? `${originalCellValue} (Speaker)`
				: originalCellValue;
		},
	},
	{
		accessorKey: 'email',
		enableColumnActions: false,
		header: 'Email',
		enableColumnFilter: false,
	},
	{
		accessorKey: 'role',
		enableColumnActions: false,
		header: 'Role',
		enableColumnFilter: false,
	},
	{
		accessorKey: 'status',
		enableColumnActions: false,
		header: 'Status',
		enableColumnFilter: false,
	},
	{
		accessorKey: 'team',
		enableColumnActions: false,
		enableColumnFilter: false,
		header: 'Team',
		Cell: ({ renderedCellValue }: { renderedCellValue: string }) =>
			`${TEAM} ${renderedCellValue}`,
	},
];

export const getFormattedQuery = (
	columnFilters: MRT_ColumnFiltersState = [],
	sorting: MRT_SortingState = []
) => {
	let query = {} as any;
	const columnNameSort =
		sorting.find((item) => item.id === 'name') || ({} as any);
	if (columnNameSort.id) {
		query = {
			sortBy: columnNameSort.id,
			sort: columnNameSort.desc ? 'DESC' : 'ASC',
		};
	}

	columnFilters.forEach((filter) => (query[filter.id] = filter.value));

	return query;
};
