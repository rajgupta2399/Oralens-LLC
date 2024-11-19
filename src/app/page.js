"use client";
import Progress from "@/components/Progress";
import {
  CrownOutlined,
  FileProtectOutlined,
  HddOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Flex, Rate, Row, Space, Typography } from "antd";
import UserTable from "@/components/UserTable";
const { Title } = Typography;

export default function Home() {
  return (
    <Row gutter={16}>
      <Col span={17}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200">
                  <CrownOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    1200+
                  </Title>
                  <Typography>Dentists</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200">
                  <HddOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    5.4L+
                  </Title>
                  <Typography>Dental Fillings</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-yellow-200">
                  <FileProtectOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    35,000+
                  </Title>
                  <Typography>Ortho cases</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
        </Row>
        <UserTable />
      </Col>
      <Col span={7}>
        <Progress />
      </Col>
    </Row>
  );
}
