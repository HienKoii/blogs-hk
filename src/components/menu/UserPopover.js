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
          <Popover.Body padding="4">
            <List.Root spacing={3}>
              {menuItems.map((item, index) => (
                <List.Item key={index} py={2} listStyle={"none"}>
                  {item.href !== "#" ? (
                    <>
                      <Link as={NextLink} href={item.href} color="blue.500" fontWeight="medium" fontSize={"medium"}>
                        <Stack direction="row" align="center" spacing={3} cursor="pointer" _hover={{ color: item.hoverColor || "blue.500" }}>
                          <Icon as={item.icon} />
                          <Text color={item.color || "gray.700"}>{item.label}</Text>
                        </Stack>
                      </Link>
                      <Separator />
                    </>
                  ) : (
                    <Stack direction="row" align="center" spacing={3} cursor="pointer" color={item.color || "gray.700"} _hover={{ color: item.hoverColor || "blue.500" }}>
                      <Icon as={item.icon} />
                      <Text>{item.label}</Text>
                    </Stack>
                  )}
                </List.Item>
              ))}
            </List.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
