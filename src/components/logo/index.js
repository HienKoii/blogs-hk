"use client";

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Flex flex="1" justify="flex-start" align="center">
      <Link href="/">
        <Text fontSize="xl" fontWeight="bold" color="blue.500">
          BlogHK
        </Text>
      </Link>
    </Flex>
  );
}
