"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    if (pathname.startsWith("/register")) {
      setSelectedKey(["2"]);
    } else if (pathname.startsWith("/registered")) {
      setSelectedKey(["3"]);
    } else if (pathname.startsWith("/about")) {
      setSelectedKey(["4"]);
    } else if (pathname.startsWith("/contact")) {
      setSelectedKey(["5"]);
    } else if (pathname === "/") {
      setSelectedKey(["1"]);
    }
  }, [pathname]);

  const menuItems = [
    { label: <Link href="/">Home</Link>, key: 1 },
    { label: <Link href="/register">Register</Link>, key: 2 },
    { label: <Link href="/registered">Registered</Link>, key: 3 },
    { type: "divider" },
    { label: <Link href="/about">About</Link>, key: 4 },
    { label: <Link href="/contact">Contact Us</Link>, key: 5 },
  ];
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}
