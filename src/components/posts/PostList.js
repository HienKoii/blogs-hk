import { Avatar, Box, Button, HStack, Text, VStack, Image, SimpleGrid, Separator } from "@chakra-ui/react";
import { FaThumbsUp, FaComment } from "react-icons/fa";

export default function PostList() {
  const posts = [
    {
      id: 1,
      username: "Nguyễn Văn A",
      avatar: "https://via.placeholder.com/50",
      content: "Hôm nay trời thật đẹp! ☀️",
      time: "2 giờ trước",
    },
    {
      id: 2,
      username: "Trần Thị B",
      avatar: "https://via.placeholder.com/50",
      content: "Vừa mới hoàn thành dự án mới. Cảm thấy thật tuyệt! 🎉",
      time: "5 giờ trước",
      images: ["/imgs/1.jpg"], // 1 ảnh
    },
    {
      id: 3,
      username: "Lê Văn C",
      avatar: "https://via.placeholder.com/50",
      content: "Chia sẻ một số hình ảnh từ chuyến du lịch của mình! 🏖️",
      time: "1 ngày trước",
      images: ["/imgs/1.jpg", "/imgs/1.jpg", "/imgs/1.jpg", "/imgs/1.jpg", "/imgs/1.jpg"], // nhiều ảnh
    },
  ];

  return (
    <VStack spacing={4} p={4} maxW="900px" mx="auto">
      {posts?.map((post) => (
        <Box key={post.id} w="full" p={4} borderWidth={1} borderRadius="lg" boxShadow="sm">
          {/* Thông tin người đăng */}
          <HStack spacing={3}>
            <HStack>
              <Avatar.Root colorPalette="red">
                <Avatar.Fallback />
                <Avatar.Image src="/imgs/avatar.png" />
              </Avatar.Root>
            </HStack>

            <VStack align="start" spacing={0}>
              <Text fontWeight="bold">{post.username}</Text>
              <Text fontSize="sm" color="gray.500" suppressHydrationWarning>
                {post.time}
              </Text>
            </VStack>
          </HStack>

          {/* Nội dung bài viết */}
          <Text mt={3}>{post.content}</Text>

          {/* Hiển thị ảnh nếu có */}
          {post.images && post.images.length === 1 && <Image src={post.images[0]} alt="Post image" borderRadius="md" mt={3} />}

          {post.images && post.images.length > 1 && (
            <SimpleGrid columns={2} spacing={2} mt={3}>
              {post.images.map((img, index) => (
                <Image key={index} src={img} alt={`Post image ${index}`} borderRadius="md" />
              ))}
            </SimpleGrid>
          )}

          <Separator my={3} />

          {/* Nút tương tác */}
          <HStack justify="space-between">
            <Button leftIcon={<FaThumbsUp />} size="sm" variant="ghost">
              Thích
            </Button>
            <Button leftIcon={<FaComment />} size="sm" variant="ghost">
              Bình luận
            </Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}
