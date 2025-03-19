"use client";
import { useUser } from "@/context/UserContext";
import { Box, Button, Input, VStack, Heading, Text, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";

export default function LoginPage() {
  const { handleLogin } = useUser();
  return (
    <Box mx="auto" maxW="sm" p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="lg" mb={4} textAlign="center">
        Đăng nhập
      </Heading>
      <VStack spacing={4}>
        <Input placeholder="Email" type="email" p={3} />
        <Input placeholder="Mật khẩu" type="password" p={3} />
        <Button colorScheme="blue" w="full" gap={"0.5"} onClick={() => handleLogin()}>
          <Icon as={FiLogIn} boxSize={4} />
          Đăng nhập
        </Button>
        <Button w="full" variant="outline" gap={"0.5"}>
          <Icon as={FcGoogle} /> Đăng nhập bằng Google
        </Button>
      </VStack>
      <Text fontSize="sm" mt={4} textAlign="center">
        Chưa có tài khoản?
        <Link as={NextLink} href="/register" ms={1} color="blue.500" fontWeight="medium">
          Đăng ký ngay
        </Link>
      </Text>
    </Box>
  );
}
