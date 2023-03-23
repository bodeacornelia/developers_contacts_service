import { Developer } from '../types';
import { APIRequestDeveloper } from '../modules/home/hooks/useCreateNewUserModal';

const apiDevelopers: Developer[] = [
	{
		name: 'Dylan 1',
		email: 'someemail@gmail.com',
		role: 'Fullstack',
		status: 'Full time',
		team: 'A',
	},
	{
		name: 'Name 2',
		email: 'someemail@gmail.com',
		role: 'Fullstack',
		status: 'Full time',
		team: 'C',
	},
	{
		name: 'Name 3',
		email: 'someemail@gmail.com',
		role: 'Frontend',
		status: 'Contractor',
		team: 'B',
	},
	{
		name: 'Name 4',
		email: 'someemail@gmail.com',
		role: 'Backend',
		status: 'Temporarly unavaliable',
		team: 'A',
	},
];

export const getDeveloperList = async ({
	queryKey,
}: any): Promise<Developer[]> => {
	const [_, query] = queryKey;
	const searchParams = new URLSearchParams(query).toString();
	const endpoint = '/api/developers';

	return new Promise((resolve) => {
		setTimeout(() => {
			const response = {
				data: apiDevelopers,
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
	newDeveloper: APIRequestDeveloper
): Promise<any> => {
	const endpoint = '/api/developers';

	return new Promise((resolve) => {
		setTimeout(() => {
			apiDevelopers.push({
				name: newDeveloper.name,
				email: newDeveloper.email,
				role: 'Backend',
				status: 'haha',
				team: 'haha',
			});
			resolve('');
		}, 500); // Simulate a 2 second delay in the response
	});
};
