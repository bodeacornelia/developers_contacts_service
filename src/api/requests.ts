import { APIRequestDeveloper } from '../modules/home/hooks/useCreateNewUserModal';

const getApiURL = () => import.meta.env.VITE_API_URL;

export const getResourceList = async <T>(
	resource: string,
	query?: any
): Promise<T[]> => {
	let url = `${getApiURL()}${resource}`;

	if (query) {
		const params = new URLSearchParams(query).toString();
		url = `${url}?${params}`;
	}

	try {
		const response = await fetch(url);

		if (response.ok) {
			const formattedRes = await response.json();
			const resources: T[] = formattedRes.data[resource];

			return resources;
		} else {
			throw new Error('Something went wrong');
		}
	} catch (error) {
		throw error;
	}
};

export const creatResource = async <T>(
	resource: string,
	payload?: APIRequestDeveloper
): Promise<T[]> => {
	const url = `${getApiURL()}${resource}`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			const formattedRes = await response.json();

			return formattedRes.data[resource];
		} else {
			throw new Error('Something went wrong');
		}
	} catch (error) {
		throw error;
	}
};
