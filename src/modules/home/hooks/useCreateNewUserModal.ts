import React, { useReducer } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { creatResource } from '../../../api/requests';
import { useResourceListQuery } from '../../../core/hooks/useAPIQuery';
import { Developer, Role, Status, Team } from '../../../types';
import { DEVELOPER_RESOURCE } from './useDevelopersTable';

export interface APIRequestDeveloper {
	name: string;
	email: string;
	roleId: string;
	statusId: string;
	teamId: string;
}

const createUserFormReducer = (
	state: APIRequestDeveloper,
	action: any
): APIRequestDeveloper => {
	return { ...state, [action.type]: action.payload };
};

const ROLE_RESOURCE = 'roles';
const STATUS_RESOURCE = 'statuses';
const TEAM_RESOURCE = 'teams';

export const useCreateNewUserModal = ({
	handleClose,
}: {
	handleClose: () => void;
}) => {
	const initialState: APIRequestDeveloper = {
		name: '',
		email: '',
		roleId: '',
		statusId: '',
		teamId: '',
	};

	const [userFormState, dispatch] = useReducer(
		createUserFormReducer,
		initialState
	);

	const createDeveloperMutation = useCreateDeveloperMutation();

	const { data: roles = [] as Role[] } =
		useResourceListQuery<Role>(ROLE_RESOURCE);
	const { data: statuses = [] as Status[] } =
		useResourceListQuery<Status>(STATUS_RESOURCE);
	const { data: teams = [] as Team[] } =
		useResourceListQuery<Team>(TEAM_RESOURCE);

	const handleInputChange = (name: string) => (event: any) => {
		const value = event.target.value;
		dispatch({ type: `${name}`, payload: value });
	};

	const handleFormSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		await createDeveloperMutation.mutateAsync(userFormState);
		handleClose();
	};

	return {
		userFormState,
		roles,
		statuses,
		teams,
		dispatch,
		handleInputChange,
		handleFormSubmit,
	};
};

const useCreateDeveloperMutation = () => {
	const queryClient = useQueryClient();

	return useMutation<Developer[], unknown, APIRequestDeveloper>(
		(payload: APIRequestDeveloper) =>
			creatResource<Developer>('users', payload),
		{
			onSuccess: () => {
				// Manually update the cache and trigger a re-render of the resources list
				queryClient.invalidateQueries(DEVELOPER_RESOURCE);
			},
		}
	);
};
