import { MRT_ColumnFiltersState, MRT_SortingState } from 'material-react-table';

export const developersTableColumns = [
	{
		accessorKey: 'name',
		header: 'Name',
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
	},
];

export const getFormattedQuery = (
	columnFilters: MRT_ColumnFiltersState,
	sorting: MRT_SortingState
) => {
	const columnNameSort =
		sorting.find((item) => item.id === 'name') || ({} as any);
	const query = {
		sortBy: 'name',
		sort: columnNameSort.desc ? 'desc' : 'asc',
	} as any;

	columnFilters.forEach((filter) => (query[filter.id] = filter.value));

	return query;
};
