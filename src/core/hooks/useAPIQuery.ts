import React from 'react';
import { useQuery } from 'react-query';
import { getResourceList } from '../../api/requests';

export const useResourceListQuery = <T>(resourceType: string, query?: any) => {
	return useQuery<T[]>(
		[resourceType],
		() => getResourceList<T>(resourceType, query),
		{
			refetchOnMount: true,
		}
	);
};
