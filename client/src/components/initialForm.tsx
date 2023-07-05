import { instance } from './api';
import { Button, Form, Input } from 'antd';

const InitialForm = () => {
	const [form] = Form.useForm();

	const onCancel = () => form.resetFields();
	const onFinish = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		const res = await instance.post('/initial', values);
		console.log(res);
	};

	return (
		<Form form={form} layout="vertical" className="" onFinish={onFinish}>
			<Form.Item
				name="source"
				label="Source Database"
				rules={[{ required: true, message: 'Source Database is required' }]}
			>
				<Input placeholder="Source Database Connection string" />
			</Form.Item>

			<Form.Item
				name="destination"
				label="Destination Database"
				rules={[{ required: true, message: 'Destination Database is required' }]}
			>
				<Input placeholder="Source Database Connection string" />
			</Form.Item>

			<Form.Item>
				<div className="flex gap-4">
					<Button type="primary" onClick={onFinish}>
						Submit
					</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</div>
			</Form.Item>
		</Form>
	);
};

export default InitialForm;
