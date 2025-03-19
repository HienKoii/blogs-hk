"use client";

import { Flex, Box } from "@chakra-ui/react";
import Logo from "../logo";
import SearchBar from "../search/SearchBar";
import UserMenu from "../menu/UserMenu";
import { ColorModeButton } from "../ui/color-mode";

export default function Header() {
  return (
    <Box
      as="header"
      w="100%"
      position="fixed" // Giữ header cố định khi cuộn
      top="0" // Đặt ở đầu trang
      zIndex="1000" // Giúp header luôn nổi trên các phần tử khác
      borderBottom="1px"
      boxShadow="sm"
      _dark={{ boxShadow: "md", bg: "gray.800" }}
      bg="white"
      transition="all 0.2s ease-in-out"
      ref={(el) => {
        if (el) {
          const height = el.offsetHeight + 24; // Thêm 12px
          document.documentElement.style.setProperty("--header-height", `${height}px`);
        }
      }}
      suppressHydrationWarning
    >
      <Flex maxW="1200px" mx="auto" px={4} h="16" align="center" justify="space-between">
        {/* Left Section - Logo */}
        <Logo />

        {/* Center Section - Search */}
        <SearchBar />

        {/* Right Section - User Menu */}
        <UserMenu />
        <Box ml={1}>
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
}
