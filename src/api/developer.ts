import Developer from '../models/Developer';
import { CreateUserFormState } from '../modules/home/hooks/useCreateNewUserModal';

const apiDevelopers: any[] = [
	{
		firstName: 'Dylan',
		lastName: 'Murray',
		email: 'someemail@gmail.com',
		role: 'FS',
		status: 'FULL_TIME',
		team: 'A',
	},
	{
		firstName: 'Name',
		lastName: '2',
		email: 'someemail@gmail.com',
		role: 'FS',
		status: 'FULL_TIME',
		team: 'C',
	},
	{
		firstName: 'Name',
		lastName: '3',
		email: 'someemail@gmail.com',
		role: 'FE',
		status: 'CONTRACTOR',
		team: 'B',
	},
	{
		firstName: 'Name',
		lastName: '4',
		email: 'someemail@gmail.com',
		role: 'BE',
		status: 'TEMP_UNAVAILABLE',
		team: 'A',
	},
];

export interface APIDeveloper {
	firstName: string;
	lastName: string;
	email: string;
	role: string;
	status: string;
	team: string;
}

export const getDeveloperList = async ({
	columnFilters,
	sorting,
}: any): Promise<Developer[]> => {
	const params = { ...columnFilters, ...sorting };
	const searchParams = new URLSearchParams(params).toString();
	const endpoint = '/api/developers';

	return new Promise((resolve) => {
		setTimeout(() => {
			const response = {
				data: apiDevelopers.map((item) => new Developer(item)),
			};
			resolve(response.data);
		}, 1000); // Simulate a 2 second delay in the response
	});

	// try {
	// 	const response = await fetch(`${endpoint}?${searchParams}`);

	// 	if (response.ok) {
	// 		const data = (await response.json()) as APIDeveloper[];
	// 		return data.map((item) => new Developer(item));
	// 	} else {
	// 		throw new Error('Something went wrong');
	// 	}
	// } catch (error) {
	// 	throw error;
	// }
};

export const addNewDeveloper = async (
	newDeveloper: CreateUserFormState
): Promise<any> => {
	const endpoint = '/api/developers';

	return new Promise((resolve) => {
		setTimeout(() => {
			apiDevelopers.push({
				firstName: newDeveloper.firstName,
				lastName: newDeveloper.lastName,
				email: newDeveloper.email,
				role: 'BE',
				status: newDeveloper.status,
				team: newDeveloper.team,
			});
			const response = {
				data: apiDevelopers.map((item) => new Developer(item)),
			};
			resolve('');
		}, 500); // Simulate a 2 second delay in the response
	});
};
