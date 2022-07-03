import React, { useState } from "react";
import {
	Row,
	Col,
	Table,
	Card,
	Button,
	Divider,
	Checkbox,
	Form,
	Input,
} from "antd";

const Expense = () => {
	const [dataSource, setDataSource] = useState([]);
	const columns = [
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			sorter: (a, b) => a.date - b.date,
		},
		{
			title: "Profile",
			dataIndex: "profile",
			key: "profile",
		},
		{
			title: "Type",
			dataIndex: "type",
			key: "type",
		},
		{
			title: "Total Value",
			dataIndex: "totalValue",
			key: "totalValue",
			sorter: (a, b) => a.totalValue - b.totalValue,
		},
		{
			title: "User",
			dataIndex: "user",
			key: "user",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
	];

	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const AddPropertyForm = () => (
		<>
			<Form
				name="basic"
				layout="vertical"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>
			</Form>
		</>
	);

	return (
		<div>
			<Row>
				<Col span={20}>
					<Divider orientation="left" orientationMargin="0">
						Expenses
					</Divider>

					<Table dataSource={dataSource} columns={columns} />
				</Col>
				<Col span={4}>
					<Row>
						<Card title="Card title">Card content</Card>
					</Row>
					<Row>
						<Card title="Card title">Card content</Card>
					</Row>
					<Row>
						<Card title="Card title">Card content</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
export default Expense;
