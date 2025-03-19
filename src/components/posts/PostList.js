import { VStack } from "@chakra-ui/react";
import PostItem from "./PostItem";

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
    <VStack spacing={4} mx="auto">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </VStack>
  );
}
