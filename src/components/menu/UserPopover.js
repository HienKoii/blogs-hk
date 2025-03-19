"use client";

import { Stack, Text, Popover, Avatar, List, Icon, Separator, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaUser, FaBookmark, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  { label: "Hồ sơ", href: "/profile", icon: FaUser },
  { label: "Bài viết của tôi", href: "/my-posts", icon: FaFileAlt },
  { label: "Đã lưu", href: "/bookmarks", icon: FaBookmark },
  { label: "Đăng xuất", href: "#", icon: FaSignOutAlt, color: "red.500", hoverColor: "red.600" },
];

export default function UserPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Avatar.Root cursor="pointer" borderWidth="2px" borderColor="blue.500" _hover={{ borderColor: "blue.600" }}>
          <Avatar.Fallback name="Random" />
          <Avatar.Image src="/imgs/avatar.png" />
        </Avatar.Root>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content width="220px" borderColor="gray.200" boxShadow="md" borderRadius="md">
          <Popover.Arrow />
          <Popover.Body padding={4}>
            <List.Root spacing={1} listStyleType="none">
              {menuItems.map((item, index) => (
                <List.Item key={index} py={2} _notLast={{ borderBottom: "1px solid", borderColor: "gray.200" }}>
                  <Stack
                    as={item.href !== "#" ? NextLink : "div"}
                    href={item.href !== "#" ? item.href : undefined}
                    direction="row"
                    align="center"
                    spacing={3}
                    px={3}
                    py={2}
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ bg: "gray.100", color: item.hoverColor || "blue.500" }}
                    transition="all 0.2s"
                  >
                    <Icon as={item.icon} />
                    <Text fontWeight="medium" color={item.color || "gray.700"}>
                      {item.label}
                    </Text>
                  </Stack>
                </List.Item>
              ))}
            </List.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
