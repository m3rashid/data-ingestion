import { read, utils } from 'xlsx';

export const parseXlsx = async (file: File, labelIndex: number) => {
	const buffer = await file.arrayBuffer();
	const wb = read(buffer, { type: 'array' });

	const schema: Record<string, string[]> = {};

	wb.SheetNames.map((sheet) => {
		const ws = wb.Sheets[sheet];
		const data: any[] = utils.sheet_to_json(ws);
		console.log(data[labelIndex]);
		schema[sheet] = Object.keys(data[labelIndex]);
	});
	return schema;
};
