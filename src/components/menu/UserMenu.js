"use client";

import { Box, Flex } from "@chakra-ui/react";
import UserPopover from "./UserPopover";
import AuthButtons from "./AuthButtons";
import { useUser } from "@/context/UserContext";

export default function UserMenu() {
  const { user } = useUser();

  return (
    <Flex flex="1" justify="flex-end" align="center">
      <Box>{user ? <UserPopover /> : <AuthButtons />}</Box>
    </Flex>
  );
}
