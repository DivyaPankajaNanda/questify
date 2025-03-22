/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
export class ApiResponse {
	statusCode: number;
	message: string;
	data: any;
	success: boolean;

	constructor(statusCode: number, message = 'Success', data: any = null) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
		this.success = statusCode < 400 ? true : false;
	}
}
