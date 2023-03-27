import { Role, Status, Team } from '../../../types';
import { TEAM } from '../constants';
import { APIRequestDeveloper } from '../hooks/useUserModal';

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

export const onMutateDevelopersDesirializer =
	(roles: Role[], statuses: Status[], teams: Team[]) =>
	(values: APIRequestDeveloper) => {
		const selectedRole = roles.find((role) => role.id === values.roleId);
		const selectedStatus = statuses.find(
			(status) => status.id === values.statusId
		);
		const selectedTeam = teams.find((team) => team.id === values.teamId);

		return {
			id: 'temp_id',
			...values,
			role: selectedRole?.role,
			status: selectedStatus?.status,
			team: selectedTeam?.team,
		};
	};
