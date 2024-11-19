import { Avatar, Card, Flex, Progress, Typography } from "antd";
import Title from "antd/es/typography/Title";

import React from "react";
const { Text } = Typography;
export default function UserProgress() {
  return (
    <Card title="Progress">
      <Flex vertical align="center">
        <Avatar size={64} src="/profile.png" />
        <Title level={4} style={{ marginBottom: 3, marginTop: 5 }}>
          John Doe
        </Title>
        <Text type="secondary">Senior Dentist</Text>
      </Flex>
      <Text>Root Canal Treatment</Text>
      <Progress percent={95} status="active" />
      <Text>Dental Filling</Text>
      <Progress percent={96} status="active" />
      <Text>Dental Crown</Text>
      <Progress percent={90} status="active" />
      <Text>Dentures</Text>
      <Progress percent={94} status="active" />
      <Text>Aligners & Braces</Text>
      <Progress percent={98} status="active" />
      <Text>Implants</Text>
      <Progress percent={99} status="active" />
    </Card>
  );
}
