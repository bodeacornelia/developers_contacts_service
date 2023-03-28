import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
	creatResource,
	deleteResource,
	getResourceList,
	updateResource,
} from '../api/requests';

export const useResourceListQuery = <T>(
	resourceType: string,
	query?: any,
	config?: any
) => {
	return useQuery<T[]>(
		[resourceType],
		() => getResourceList<T>(resourceType, query),
		{
			refetchOnMount: true,
			...config,
		}
	);
};

export const useCreateResourceMutation = <T>(
	resource: string,
	onMutateDesirializer?: (values: any) => any
) => {
	const queryClient = useQueryClient();

	return useMutation<T[], unknown, any>(
		(payload: any) => creatResource<T>(resource, payload),
		{
			// onMutate can be very useful when creating a resource
			// you can predict how the new updated data will look like and change it in a sync way
			// till the POST call will be made in BE
			// when the POST suceeds the new data will be presented to the user
			// the user will see the data that he introduced since the begining without any loading time
			onMutate: (payload: any) => {
				const previousData = queryClient.getQueryData(resource);
				let newResource = {
					id: 'temp_id',
					...payload,
				};
				if (onMutateDesirializer) {
					newResource = onMutateDesirializer(payload);
				}

				queryClient.setQueryData(resource, (old: any) => {
					return [...old, newResource];
				});

				return () => queryClient.setQueryData(resource, previousData);
			},
			onError: (error, newResource, rollBack: any) => {
				// display a error Snackbar
				if (rollBack) {
					rollBack();
				}
			},
			onSettled: () => {
				queryClient.invalidateQueries(resource);
			},
		}
	);
};

export const useUpdateResourceMutation = <T>(
	resource: string,
	resourceId: string
) => {
	const queryClient = useQueryClient();

	return useMutation<T[], unknown, any>(
		(payload: any) => updateResource<T>(resource, resourceId, payload),
		{
			onSuccess: () => {
				// Manually update the cache and trigger a re-render of the resources list
				queryClient.invalidateQueries(resource);
			},
		}
	);
};

export const useDeleteResource = <T>(resource: string) => {
	const queryClient = useQueryClient();

	return useMutation((id: string) => deleteResource<T>(resource, id), {
		onSuccess: () => {
			// Manually update the cache and trigger a re-render of the resources list
			queryClient.invalidateQueries(resource);
		},
	});
};
