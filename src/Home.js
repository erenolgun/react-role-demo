import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Input } from "antd";
import "./Home.css";

import {
  IdcardOutlined,
  UnorderedListOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Home() {
  const columns = [
    {
      title: () => {
        return (
          <div className="column-container">
            <IdcardOutlined />
            <span className="column-name">ID</span>
          </div>
        );
      },
      dataIndex: "id",
      key: "id",
      render: (text, record) => <div>{record.id.value}</div>,
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <UnorderedListOutlined />
            <span className="column-name">Name</span>
          </div>
        );
      },
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <div className="user-container">
          <div className="avatar">
            <img
              src={record.picture.thumbnail}
              alt={record.name.first + " " + record.name.last}
            />
          </div>
          <div className="name">
            {record.name.first + " " + record.name.last}
          </div>
        </div>
      ),
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <MailOutlined />
            <span className="column-name">Email</span>
          </div>
        );
      },
      dataIndex: "email",
      key: "email",
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <PhoneOutlined />
            <span className="column-name">Phone</span>
          </div>
        );
      },
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("https://randomuser.me/api/?nat=us&results=15")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUsers(data.results);
      });
  }

  return (
    <div className="table-container">
      <div className="create-button">Create Contact</div>
      <div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={users}
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
}

export default Home;
