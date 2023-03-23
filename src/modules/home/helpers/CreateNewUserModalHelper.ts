import { Role, Status, Team } from '../../../types';

export const getFormattedRoles = (roles: Role[]) =>
	roles.map(({ role, id }) => ({
		label: role,
		value: id,
	}));

export const getFormattedStatuses = (statuses: Status[]) =>
	statuses.map(({ status, id }) => ({
		label: status,
		value: id,
	}));

export const getFormattedTeams = (teams: Team[]) =>
	teams.map(({ team, id }) => ({
		label: `Team ${team}`,
		value: id,
	}));
