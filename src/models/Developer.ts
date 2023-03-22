import { APIDeveloper } from '../api/developer';
import Role from './Role';

class Developer {
	public static DOMAIN = 'developers';

	private _name: string;
	private _email: string;
	private _role: string;
	private _status: string;
	private _team: string;

	constructor(rawDeveloperData: APIDeveloper) {
		this._name = `${rawDeveloperData.firstName} ${rawDeveloperData.lastName}`;
		this._email = rawDeveloperData.email;
		this._role = Role.getRole(rawDeveloperData.role);
		this._status = this.getStatus(rawDeveloperData.status);
		this._team = rawDeveloperData.team;
	}

	// getters
	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get role(): string {
		return this._role;
	}

	get status(): string {
		return this._status;
	}

	get team(): string {
		return this._team;
	}

	private getStatus = (status: string) => {
		switch (status) {
			case 'FULL_TIME':
				return 'Full time';
			case 'CONTRACTOR':
				return 'Contractor';
			case 'TEMP_UNAVAILABLE':
				return 'Temporarily unavailable';
			default:
				return 'Full time';
		}
	};
}

export default Developer;
