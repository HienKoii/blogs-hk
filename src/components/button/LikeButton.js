import { Box, Button, Popover, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

const reactions = [
  { emoji: "👍", label: "Thích", color: "blue.500", bg: "blue.100" },
  { emoji: "❤️", label: "Yêu thích", color: "red.500", bg: "red.100" },
  { emoji: "😂", label: "Haha", color: "yellow.500", bg: "yellow.100" },
  { emoji: "😮", label: "Wow", color: "orange.500", bg: "orange.100" },
  { emoji: "😢", label: "Buồn", color: "blue.300", bg: "blue.50" },
  { emoji: "😡", label: "Phẫn nộ", color: "red.600", bg: "red.200" },
];

const LikeButton = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover.Root onOpenChange={setIsPopoverOpen}>
      {/* Nút Like */}
      <Popover.Trigger asChild>
        <Button
          flex={1}
          textAlign="center"
          size="sm"
          variant="ghost"
          bg={selectedReaction ? selectedReaction.bg : "transparent"}
          color={selectedReaction ? selectedReaction.color : "gray.600"}
          _hover={{ bg: selectedReaction ? selectedReaction.bg : "gray.100" }}
          transition="0.3s"
        >
          {selectedReaction ? (
            <>
              {selectedReaction.emoji} {selectedReaction.label}
            </>
          ) : (
            // Dùng Flex hoặc Box thay vì Button lồng nhau
            <Flex
              align="center"
              borderRadius="md"
              color="gray.600"
              _dark={{ color: "gray.300" }} // Màu chữ khi ở dark mode
            >
              <Icon as={FaThumbsUp} mr={2} /> Thích
            </Flex>
          )}
        </Button>
      </Popover.Trigger>

      {/* Popover hiển thị cảm xúc */}
      <Popover.Positioner>
        <Popover.Content borderRadius="lg" boxShadow="lg" p={3}>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Body>
            <Flex gap={3} justify="center">
              {reactions.map((reaction) => (
                <Box
                  key={reaction.label}
                  fontSize="2xl"
                  borderRadius="full"
                  cursor="pointer"
                  transform={isPopoverOpen && selectedReaction?.label === reaction.label ? "scale(1.3)" : "scale(1)"}
                  _hover={{ transform: "scale(1.3)", transition: "0.2s" }}
                  transition="0.2s"
                  onClick={() => setSelectedReaction(reaction)}
                >
                  {reaction.emoji}
                </Box>
              ))}
            </Flex>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default LikeButton;
