import { HStack, Button, Icon } from "@chakra-ui/react";
import { FaComment, FaBookmark } from "react-icons/fa";
import LikeButton from "../button/LikeButton";

const PostActions = () => {
  return (
    <HStack justify="space-evenly" spacing={4}>
      {/* Nút Thích với Popover v3 */}
      <LikeButton />

      {/* Nút Bình luận */}
      <Button flex={1} size="sm" variant="ghost" _hover={{ bg: "gray.100", color: "gray.700" }}>
        <Icon as={FaComment} mr={1} /> Bình luận
      </Button>

      {/* Nút Lưu */}
      <Button flex={1} size="sm" variant="ghost" _hover={{ bg: "green.100", color: "green.500" }}>
        <Icon as={FaBookmark} mr={1} /> Lưu
      </Button>
    </HStack>
  );
};

export default PostActions;
