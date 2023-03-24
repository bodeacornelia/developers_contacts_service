import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { creatResource, getResourceList } from '../api/requests';

export const useResourceListQuery = <T>(resourceType: string, query?: any) => {
	return useQuery<T[]>(
		[resourceType],
		() => getResourceList<T>(resourceType, query),
		{
			refetchOnMount: true,
		}
	);
};

export const useCreateResourceMutation = <T>(resource: string) => {
	const queryClient = useQueryClient();

	return useMutation<T[], unknown, any>(
		(payload: any) => creatResource<T>(resource, payload),
		{
			onSuccess: () => {
				// Manually update the cache and trigger a re-render of the resources list
				queryClient.invalidateQueries(resource);
			},
		}
	);
};
