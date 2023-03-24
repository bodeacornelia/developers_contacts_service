import { Role, Status, Team } from '../../../types';
import { TEAM } from '../constants';

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
		label: `${TEAM} ${team}`,
		value: id,
	}));
