export interface IUser {
	userId: string;
	name: string;
	email: string;
	password?: string;
	refreshToken?: string;
	createdAt?: Date;
	updatedAt?: Date;
	isPasswordMatch(enteredPassword: string): Promise<boolean>;
}
