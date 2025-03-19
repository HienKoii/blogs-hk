"use client";

import { Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <Flex flex="6" justify="center" px={4}>
      <Flex
        w="full"
        align="center"
        border="1px solid" // Thêm border
        borderColor="gray.300" // Màu viền
        borderRadius="full"
        pl={3}
        pr={2}
      >
        <Input
          placeholder="Tìm kiếm bài viết..." //
          size="sm"
          outline="none"
          border="none"
          bg="transparent"
          _focus={{ boxShadow: "none" }}
          pl={2}
        />
        <FiSearch />
      </Flex>
    </Flex>
  );
}
