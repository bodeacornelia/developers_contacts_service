import {
	MRT_ColumnDef,
	MRT_ColumnFiltersState,
	MRT_SortingState,
} from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import {
	useDeleteResource,
	useResourceListQuery,
} from '../../../core/hooks/useAPIQuery';
import { Developer } from '../../../types';
import {
	developersTableColumns,
	getFormattedQuery,
} from '../helpers/DevelopersTableHelper';

export const DEVELOPER_RESOURCE = 'users';

export const useDevelopersTable = () => {
	const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
		[]
	);
	const [sorting, setSorting] = useState<MRT_SortingState>([]);

	const {
		data = [] as Developer[],
		isLoading,
		refetch,
	} = useResourceListQuery<Developer>(
		DEVELOPER_RESOURCE,
		getFormattedQuery(columnFilters, sorting)
	);

	useEffect(() => {
		refetch();
	}, [columnFilters, sorting]);

	const columns = useMemo(
		() => developersTableColumns as MRT_ColumnDef<Developer>[],
		[]
	);

	const deleteDeveloperMutation =
		useDeleteResource<Developer>(DEVELOPER_RESOURCE);

	const handleDeleteDeveloper = (developerId: string) => (event: any) =>
		deleteDeveloperMutation.mutateAsync(developerId);

	return {
		columns,
		data,
		columnFilters,
		sorting,
		isLoading,
		setSorting,
		setColumnFilters,
		handleDeleteDeveloper,
	};
};
