import { CustomException } from '../../../../common/exceptions/CustomException.js';
import { ERROR_CODES } from '../../../../common/utils/Constants.js';
import { IUser } from '../../../../common/interfaces/IUser.js';
import UserModel from '../models/UserModel.js';
import { IUserRepository } from './IUserRepository.js';

export class UserRepository implements IUserRepository {
	findById = async (userId: string): Promise<IUser | null> => {
		return await UserModel.findById(userId).exec();
	};

	findByEmail = async (email: string): Promise<IUser | null> => {
		return await UserModel.findOne({ email: email }).exec();
	};

	create = async (user: Partial<IUser>): Promise<IUser> => {
		const newUser = new UserModel(user);
		return await newUser.save();
	};

	update = async (userId: string, updates: Partial<IUser>): Promise<IUser> => {
		const updatedUser = await UserModel.findByIdAndUpdate(userId, updates, { new: true }).exec();

		if (updatedUser == null) throw new CustomException({ errorCodeObject: ERROR_CODES.USER_NOT_FOUND });

		return updatedUser;
	};

	delete = async (userId: string): Promise<boolean> => {
		const result = await UserModel.findByIdAndDelete(userId).exec();
		return result != null;
	};

	authenticateUser = async (email: string, password: string): Promise<IUser> => {
		const user = await UserModel.findOne({ email: email }).exec();

		if (!user) throw new CustomException({ errorCodeObject: ERROR_CODES.INVALID_CREDENTIALS });

		const isPasswordValid = await user.isPasswordMatch(password);

		if (!isPasswordValid) throw new CustomException({ errorCodeObject: ERROR_CODES.INVALID_CREDENTIALS });

		return user;
	};
}
