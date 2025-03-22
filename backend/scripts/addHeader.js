import fs from 'fs';

const header = `/*\nAuthor : Divya Pankaja Nanda \nGithub : https://github.com/DivyaPankajaNanda\n*/`;
const files = process.argv.slice(2).filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'));

files.forEach((file) => {
	const content = fs.readFileSync(file, 'utf8');
	if (!content.startsWith(header)) fs.writeFileSync(file, header + content, 'utf8');
});
