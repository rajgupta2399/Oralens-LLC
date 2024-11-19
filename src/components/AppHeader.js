import { Header } from "antd/es/layout/layout";
import React from "react";
import { Avatar } from "antd";
import Image from "next/image";

function AppHeader() {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <Image
          src="https://oralens.com/wp-content/uploads/2022/08/Oralens-LOGO-300x262.png"
          width={50} // Replace with appropriate dimensions
          height={50}
          alt="Oralens Logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <Avatar size={36} src="/profile.png" />
        <div>John Doe</div>
      </div>
    </Header>
  );
}

export default AppHeader;
