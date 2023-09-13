export interface User {
	id: string;
	firstName: string;
	lastName: string;
}

export type UserOmitType = Omit<User, 'id'>;

export type UserPickType = Pick<User, 'firstName' | 'lastName'>;
