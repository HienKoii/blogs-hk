import { Avatar, Box, Button, Icon, Stack, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaImage, FaPaperPlane, FaSmile, FaVideo } from "react-icons/fa";

export default function PostsCreate() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      console.log("Bài viết mới:", content);
      setContent(""); // Xóa nội dung sau khi đăng
    }
  };

  return (
    <VStack spacing={4} mb={2}>
      <Box
        w="full"
        p={4}
        borderWidth={1} //
        borderRadius="lg"
        boxShadow="sm"
        bg="white"
        _dark={{ boxShadow: "md", bg: "gray.800" }}
      >
        <Stack direction="row" spacing={4} align="center">
          <Avatar.Root cursor="pointer" borderWidth="2px" borderColor="blue.500" _hover={{ borderColor: "blue.600" }}>
            <Avatar.Fallback name="Random" />
            <Avatar.Image src="/imgs/avatar.png" />
          </Avatar.Root>
          <Textarea
            placeholder="Bạn đang nghĩ gì?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            resize="none"
            p={3}
            borderRadius="md"
            variant="outline" // Dùng variant có sẵn của Chakra UI
            borderColor="gray.300" // Mặc định cho light mode
            _dark={{ borderColor: "gray.600" }} // Đảm bảo border hiển thị trong dark mode
            _focus={{ borderColor: "blue.500", boxShadow: "outline" }} // Hiệu ứng focus
          />
        </Stack>
        <Stack direction="row" justifyContent={"center"} spacing={4} mt={3}>
          <Button variant="ghost" size="sm">
            <Icon as={FaImage} /> Ảnh
          </Button>
          <Button variant="ghost" size="sm">
            <Icon as={FaVideo} /> Video
          </Button>
          <Button variant="ghost" size="sm">
            <Icon as={FaSmile} /> Cảm xúc
          </Button>
        </Stack>
        <Box textAlign={"center"} my={2}>
          <Button colorScheme="blue" size="sm" px={8} onClick={handlePost} isDisabled={!content.trim()}>
            <Icon as={FaPaperPlane} /> Đăng
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
