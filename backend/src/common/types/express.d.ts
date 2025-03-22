/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

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
