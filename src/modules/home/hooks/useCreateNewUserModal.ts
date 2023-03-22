import React, { useEffect, useReducer, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addNewDeveloper } from '../../../api/developer';
import Developer from '../../../models/Developer';
import Role, { apiRoles } from '../../../models/Role';

export type CreateUserFormState = {
	firstName: string;
	lastName: string;
	email: string;
	roleId: number;
	status: string;
	team: string;
};

const createUserFormReducer = (
	state: CreateUserFormState,
	action: any
): CreateUserFormState => {
	return { ...state, [action.type]: action.payload };
};

export const useCreateNewUserModal = ({
	handleClose,
}: {
	handleClose: () => void;
}) => {
	const initialState: CreateUserFormState = {
		firstName: '',
		lastName: '',
		email: '',
		roleId: 0,
		status: '',
		team: '',
	};

	const [userFormState, dispatch] = useReducer(
		createUserFormReducer,
		initialState
	);

	const createDeveloperMutation = useCreateDeveloperMutation();

	const [roles, setRoles] = useState([] as Role[]);

	useEffect(() => {
		const roles = apiRoles.map((item) => new Role(item));
		setRoles(roles);
	}, []);

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
		dispatch,
		handleInputChange,
		handleFormSubmit,
	};
};

const useCreateDeveloperMutation = () => {
	const queryClient = useQueryClient();

	return useMutation<string, unknown, CreateUserFormState>(addNewDeveloper, {
		onSuccess: () => {
			// Manually update the cache and trigger a re-render of the resources list
			queryClient.invalidateQueries(Developer.DOMAIN);
		},
	});
};
