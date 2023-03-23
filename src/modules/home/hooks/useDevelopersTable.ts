import {
	MRT_ColumnDef,
	MRT_ColumnFiltersState,
	MRT_SortingState,
} from 'material-react-table';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getDeveloperList } from '../../../api/developer';
import { Developer } from '../../../types';
import {
	developersTableColumns,
	getFormattedQuery,
} from '../helpers/DevelopersTableHelper';

export const useDevelopersTable = () => {
	const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
		[]
	);
	const [sorting, setSorting] = useState<MRT_SortingState>([]);

	const { data = [] as Developer[], isLoading } = useQuery<Developer[]>(
		['developers', getFormattedQuery(columnFilters, sorting)],
		getDeveloperList
	);

	const columns = useMemo(
		() => developersTableColumns as MRT_ColumnDef<Developer>[],
		[]
	);

	return {
		columns,
		data,
		columnFilters,
		sorting,
		isLoading,
		setSorting,
		setColumnFilters,
	};
};
