import React, { useEffect, useReducer } from 'react';
import {
	useCreateResourceMutation,
	useResourceListQuery,
	useUpdateResourceMutation,
} from '../../../core/hooks/useAPIQuery';
import { Developer, Role, Status, Team } from '../../../types';
import { onMutateDevelopersDesirializer } from '../helpers/UserModalHelper';
import { DEVELOPER_RESOURCE } from './useDevelopersTable';

export interface APIRequestDeveloper {
	name: string;
	email: string;
	roleId: string;
	statusId: string;
	teamId: string;
}

const userFormReducer = (
	state: APIRequestDeveloper,
	action: any
): APIRequestDeveloper => {
	return { ...state, [action.type]: action.payload };
};

const ROLE_RESOURCE = 'roles';
const STATUS_RESOURCE = 'statuses';
const TEAM_RESOURCE = 'teams';

export const useUserModal = ({
	user,
	handleClose,
}: {
	user: Developer;
	handleClose: () => void;
}) => {
	const { data: roles = [] as Role[] } =
		useResourceListQuery<Role>(ROLE_RESOURCE);
	const { data: statuses = [] as Status[] } =
		useResourceListQuery<Status>(STATUS_RESOURCE);
	const { data: teams = [] as Team[] } =
		useResourceListQuery<Team>(TEAM_RESOURCE);

	const initialState: APIRequestDeveloper = {
		name: user.name || '',
		email: user.email || '',
		roleId: '',
		statusId: '',
		teamId: '',
	};

	useEffect(() => {
		const roleId = roles.find((role) => role.role === user.role)?.id || '';
		const statusId =
			statuses.find((status) => status.status === user.status)?.id || '';
		const teamId = teams.find((team) => team.team === user.team)?.id || '';

		if (user.name) {
			dispatch({ type: 'roleId', payload: roleId });
			dispatch({ type: 'statusId', payload: statusId });
			dispatch({ type: 'teamId', payload: teamId });
		}
	}, [user.name, roles, statuses, teams]);

	const [userFormState, dispatch] = useReducer(userFormReducer, initialState);

	const handleInputChange = (name: string) => (event: any) => {
		const value = event.target.value;
		dispatch({ type: `${name}`, payload: value });
	};

	const createDeveloperMutation = useCreateResourceMutation<Developer>(
		DEVELOPER_RESOURCE,
		onMutateDevelopersDesirializer(roles, statuses, teams)
	);
	const updateDeveloperMutation = useUpdateResourceMutation<Developer>(
		DEVELOPER_RESOURCE,
		user.id
	);

	const handleFormSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		handleClose();
		if (user.id) {
			await updateDeveloperMutation.mutateAsync(userFormState);
		} else {
			await createDeveloperMutation.mutateAsync(userFormState);
		}
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
