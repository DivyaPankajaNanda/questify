import { Request } from 'express';
import fs from 'fs';
import Logger from './Logger.js';

const unlinkFile = (file: Express.Multer.File) => {
	fs.access(file.path, fs.constants.F_OK, (error) => {
		if (!error) {
			fs.unlink(file.path, (error) => {
				if (error) Logger.getInstance().error(`Error while removing uploaded file : ${file.path} - ${error}`);
			});
		}
	});
};

export const uploadedFilesCleanup = (request: Request) => {
	if (!request.files && !request.file) return;

	if (request.file) unlinkFile(request.file);

	if (request.files) {
		Object.values(request.files).forEach((files) => {
			if (Array.isArray(files))
				files.forEach((file: Express.Multer.File) => {
					unlinkFile(file);
				});
		});
	}
};
