import { Avatar, Box, HStack, Text, Image, SimpleGrid, Separator, Menu, IconButton } from "@chakra-ui/react";
import PostActions from "./PostActions";
import { FaEllipsisV } from "react-icons/fa";
import PostMenu from "./PostMenu";

export default function PostItem({ post }) {
  return (
    <Box
      w="full" //
      p={4}
      borderWidth={1}
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      _dark={{ boxShadow: "md", bg: "gray.800" }}
    >
      <HStack spacing={3} align="center" justify="space-between" w="full">
        {/* Avatar + Thông tin */}
        <HStack spacing={3}>
          <Avatar.Root colorPalette="red">
            <Avatar.Fallback />
            <Avatar.Image src="/imgs/avatar.png" />
          </Avatar.Root>
          <Box>
            <Text fontWeight="bold">{post.username}</Text>
            <Text fontSize="sm" color="gray.500">
              {post.time}
            </Text>
          </Box>
        </HStack>
        <PostMenu />
      </HStack>

      {/* Nội dung bài viết */}
      <Text mt={3} fontSize="md">
        {post.content}
      </Text>

      {/* Hiển thị ảnh nếu có */}
      {post.images && post.images.length === 1 && (
        <Image
          src={post.images[0]}
          alt="Post image" //
          borderRadius="lg"
          mt={3}
          boxShadow="sm"
        />
      )}
      {post.images && post.images.length > 1 && (
        <SimpleGrid columns={2} spacing={2} mt={3}>
          {post.images.map((img, index) => (
            <Image key={index} src={img} alt={`Post image ${index}`} borderRadius="lg" boxShadow="sm" />
          ))}
        </SimpleGrid>
      )}

      <Separator my={3} borderColor="gray.300" />

      {/* Nút tương tác */}
      <PostActions />
    </Box>
  );
}
