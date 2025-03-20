import bcrypt from 'bcryptjs';

export class PasswordUtil {
	private static readonly saltRounds: number = 10;

	public static hashPassword = async (password: string): Promise<string> => {
		return bcrypt.hash(password, this.saltRounds);
	};

	public static comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
		return bcrypt.compare(password, hashedPassword);
	};
}
