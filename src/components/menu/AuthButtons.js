
import { Button, Stack, Icon, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export default function AuthButtons() {
  const isMobile = useBreakpointValue({ base: true, md: false }); // Ẩn chữ trên mobile

  return (
    <Stack direction="row">
      <Button
        as={Link}
        href="/login"
        variant="ghost" //
        size="sm"
        _hover={{ bg: "gray.50", color: "blue.500", transform: "translateY(-1px)" }}
        transition="all 0.2s"
        fontWeight="medium"
        gap={"1"}
       
      >
        <Icon as={FiLogIn} boxSize={4} />
        {!isMobile && "Đăng nhập"} {/* Ẩn chữ trên mobile */}
      </Button>
      {!isMobile && (
        <Button
          as={Link}
          href="/register"
          colorScheme="blue" //
          size="sm"
          bg="blue.500"
          px={4}
          _hover={{ bg: "blue.600", transform: "translateY(-1px)" }}
          _active={{ bg: "blue.700" }}
          transition="all 0.2s"
          fontWeight="medium"
          gap={"1"}
        >
          <Icon as={FiUserPlus} boxSize={4} />
          Đăng ký
        </Button>
      )}
    </Stack>
  );
}
