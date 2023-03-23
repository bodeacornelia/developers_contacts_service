export const getResourceList = async <T>(resource: string): Promise<T[]> => {
	const url = `http://localhost:8000/api/${resource}`;

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
