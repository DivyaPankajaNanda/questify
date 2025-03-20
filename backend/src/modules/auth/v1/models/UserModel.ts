import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../../../../common/interfaces/IUser.js';
import { PasswordUtil } from '../../../../common/utils/PasswordUtil.js';

export interface IUserDocument extends IUser, Document {}

const userSchema: Schema<IUserDocument> = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'Name is required.'],
		},
		email: {
			type: String,
			index: true,
			trim: true,
			lowercase: true,
			required: [true, 'Email is required.'],
			unique: true,
			match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
		},
		password: {
			type: String,
			trim: true,
			required: [true, 'Password is required.'],
		},
		refreshToken: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
		optimisticConcurrency: true,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
			transform: (_doc, ret) => {
				delete ret._id;
				delete ret.__v;
				delete ret.email;
				delete ret.password;
				delete ret.refreshToken;
				delete ret.updatedAt;
				return ret;
			},
		},
		id: false,
	},
);

userSchema.virtual('userId').get(function () {
	const user = this as IUserDocument;
	return String(user._id);
});

userSchema.pre('save', async function (next) {
	const user = this as IUserDocument;
	if (!user.isModified('password')) return next();
	user.password = await PasswordUtil.hashPassword(user.password!);
	return next();
});

userSchema.pre('findOneAndUpdate', async function (next) {
	const update = this.getUpdate() as Partial<IUserDocument>;
	if (update.password) {
		update.password = await PasswordUtil.hashPassword(update.password);
	} else {
		delete update.password;
	}
	return next();
});

userSchema.methods.isPasswordMatch = async function (enteredPassword: string): Promise<boolean> {
	const user = this as IUserDocument;
	return await PasswordUtil.comparePassword(enteredPassword, user.password!);
};

const User = mongoose.model('User', userSchema);
export default User;
