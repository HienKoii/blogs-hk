"use client";
import { Box, Button, Input, VStack, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import NextLink from "next/link";
import { FiUserPlus } from "react-icons/fi";

export default function RegisterPage() {
  return (
    <Box mx="auto" maxW="sm" p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="lg" mb={4} textAlign="center">
        Đăng ký
      </Heading>
      <VStack spacing={4}>
        <Input placeholder="Email" type="email" p={3} />
        <Input placeholder="Mật khẩu" type="password" p={3} />
        <Input placeholder="Nhập lại mật khẩu" type="password" p={3} />
        <Button colorScheme="blue" w="full" gap={"0.5"}>
          <Icon as={FiUserPlus} boxSize={4} /> Đăng ký
        </Button>
        <Button w="full" variant="outline" gap={"0.5"}>
          <Icon as={FcGoogle} /> Đăng nhập bằng Google
        </Button>
      </VStack>
      <Text fontSize="sm" mt={4} textAlign="center">
        Đã có tài khoản?
        <Link as={NextLink} href="/login" ms={1} color="blue.500" fontWeight="medium">
          Đăng nhập ngay
        </Link>
      </Text>
    </Box>
  );
}
