export type Team = {
	id: string;
	team: string;
};

export type Status = {
	id: string;
	status: string;
};

export type Role = {
	id: string;
	role: string;
};

export type Developer = {
	id: string;
	name: string;
	email: string;
	role: string;
	status: string;
	team: string;
};
