export const apiRoles: any[] = [
	{
		id: '1',
		role: 'FS',
	},
	{
		id: '2',
		role: 'FE',
	},
	{
		id: '3',
		role: 'BE',
	},
];

class Role {
	public static getRole = (role: string) => {
		switch (role) {
			case 'FS':
				return 'Fullstack';
			case 'FE':
				return 'Frontend';
			case 'BE':
				return 'Backend';
			default:
				return 'Fullstack';
		}
	};

	public static getFormattedRoles = (roles: Role[]) =>
		roles.map(({ role, roleId }) => ({
			label: role,
			value: roleId,
		}));

	private _roleId: number;
	private _role: string;

	constructor(rawRoleData: any) {
		this._roleId = rawRoleData.id;
		this._role = Role.getRole(rawRoleData.role);
	}

	// getters
	get roleId(): number {
		return this._roleId;
	}

	get role(): string {
		return this._role;
	}
}

export default Role;
