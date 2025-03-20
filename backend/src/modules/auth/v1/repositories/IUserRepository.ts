import { IUser } from '../../../../common/interfaces/IUser.js';

export interface IUserRepository {
	findById(userId: string): Promise<IUser | null>;
	findByEmail(email: string): Promise<IUser | null>;
	create(user: Partial<IUser>): Promise<IUser>;
	update(userId: string, updates: Partial<IUser>): Promise<IUser>;
	delete(userId: string): Promise<boolean>;
	authenticateUser(email: string, password: string): Promise<IUser>;
}
