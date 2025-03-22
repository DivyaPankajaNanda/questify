/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import multer from 'multer';
import path from 'path';
import { config } from './config.js';

const storage = multer.diskStorage({
	destination: function (request, file, cb) {
		cb(null, './public/uploads');
	},
	filename: function (request, file, cb) {
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`); // this method automatically ads . between the filename and extension
	},
});

const limits = {
	fileSize: Number(config.FILE_UPLOAD_SIZE_LIMIT),
};

const imageFileFilter = (request: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
	const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];

	if (allowedMimeTypes.includes(file.mimetype)) {
		cb(null, true); // Accept the file
	} else {
		const error = new multer.MulterError('LIMIT_UNEXPECTED_FILE', file.fieldname);
		error.message = `File type not supported: ${file.mimetype}. Only JPEG, PNG, GIF, WEBP and SVG files are allowed.`;
		cb(error); // Reject the file
	}
};

const imageUpload = multer({
	storage: storage,
	fileFilter: imageFileFilter,
	limits: limits,
});

export { imageUpload };
