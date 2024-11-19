import { Space, Table, Tag } from "antd";
import React from "react";

function LearningTable() {
  const columns = [
    {
      title: "Patient name",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Treatment",
      dataIndex: "treatment",
      key: "treatment",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, text) => (
        <Tag color={text.status === "completed" ? "green" : "blue"}>
          {text.status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      patientName: "Akash Doodeja",
      treatment: "Dental Filling",
      gender: "F",
      status: "completed",
    },
    {
      id: "2",
      patientName: "Ashish Chanchlani",
      treatment: "Dental Crown",
      gender: "F",
      status: "in progress",
    },
    {
      id: "3",
      patientName: "Ajay Naagar",
      treatment: "Dentures",
      gender: "M",
      status: "completed",
    },
    {
      id: "4",
      patientName: "Jimmy",
      treatment: "Implants",
      gender: "M",
      status: "completed",
    },
    {
      id: "5",
      patientName: "KSI",
      treatment: "Aligners",
      gender: "M",
      status: "completed",
    },
    {
      id: "5",
      patientName: "George",
      treatment: "Braces",
      gender: "M",
      status: "completed",
    },
    {
      id: "5",
      patientName: "Sagar Kumar",
      treatment: "Root Canal",
      gender: "M",
      status: "completed",
    },
    {
      id: "5",
      patientName: "Akshat Gupta",
      treatment: "Dental Crown",
      gender: "M",
      status: "completed",
    },
  ];
  return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;
