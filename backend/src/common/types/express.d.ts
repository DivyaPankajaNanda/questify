declare global {
	namespace Express {
		interface Request {
			user?: {
				userId: string;
				name?: string;
			};
			accessToken?: string;
		}
	}
}

export {};
