import { useState } from 'react';
import { parseXlsx } from './parse';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, InputNumber, Upload, message } from 'antd';

interface Values {
	labelIndex: number;
	file: File | null;
}

const FileParserForm = () => {
	const [form] = Form.useForm();
	const [values, setValues] = useState<Values>({ labelIndex: 0, file: null });

	const onFinish = async () => {
		await form.validateFields();
		if (!values.file) {
			message.error('Please choose a file');
			return;
		}
		const schema = await parseXlsx(values.file, values.labelIndex);
		console.log({ schema });
	};

	return (
		<Form layout="vertical">
			<Form.Item label="Where are your data labels">
				<InputNumber
					name="labelIndex"
					placeholder="Source Database Connection string"
					onChange={(val) => {
						if (val && typeof val === 'number') setValues({ ...values, labelIndex: val });
					}}
				/>
			</Form.Item>

			<Form.Item label="Choose File">
				<Upload
					name="file"
					listType="picture"
					multiple={false}
					maxCount={1}
					accept=".xlsx"
					onChange={(file) => setValues((p) => ({ ...p, file: file.file.originFileObj as any }))}
				>
					<Button type="dashed" icon={<UploadOutlined />}>
						Choose File
					</Button>
				</Upload>
			</Form.Item>

			<div className="flex gap-4">
				<Button type="primary" onClick={onFinish}>
					Submit
				</Button>
				<Button onClick={() => form.resetFields()}>Cancel</Button>
			</div>
		</Form>
	);
};

export default FileParserForm;
