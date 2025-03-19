import { Box, Flex, Icon, List, Popover, Stack, Text } from "@chakra-ui/react";
import { FaBars, FaEdit, FaTrash } from "react-icons/fa";

export default function PostMenu() {
  return (
    <Popover.Root>
      {/* Trigger - Icon để mở Popover */}
      <Popover.Trigger asChild>
        <Box cursor="pointer" _hover={{ color: "gray.500" }}>
          <Icon as={FaBars} boxSize={4} />
        </Box>
      </Popover.Trigger>

      <Popover.Positioner>
        <Popover.Content borderRadius="md" boxShadow="md" p={2} zIndex="1000" border="1px solid" borderColor="gray.200">
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>

          <Popover.Body p={0}>
            {/* Dùng List và ListItem thay cho Box */}
            <List.Root spacing={1}>
              {/* Mục Chỉnh sửa */}
              <List.Item _notLast={{ borderBottom: "1px solid", borderColor: "gray.200" }}>
                <Flex
                  borderRadius="md"
                  width="100%"
                  px={3}
                  py={2}
                  _hover={{ bg: "gray.100" }}
                  transition="all 0.2s"
                  onClick={() => console.log("Chỉnh sửa")}
                  align="center" // Căn giữa theo chiều dọc
                  justify="flex-start" // Căn trái theo chiều ngang
                >
                  <Icon as={FaEdit} mr={2} />
                  <Text fontWeight="medium" color={"gray.700"}>
                    Chỉnh sửa
                  </Text>
                </Flex>
              </List.Item>

              {/* Mục Xóa */}
              <List.Item _notLast={{ borderBottom: "1px solid", borderColor: "gray.200" }}>
                <Flex
                  borderRadius="md"
                  width="100%"
                  px={3}
                  py={2}
                  _hover={{ bg: "gray.100" }}
                  transition="all 0.2s"
                  onClick={() => console.log("Xoaas")}
                  align="center" // Căn giữa theo chiều dọc
                  justify="flex-start" // Căn trái theo chiều ngang
                >
                  <Icon as={FaTrash} mr={2} />
                  <Text fontWeight="medium" color={"gray.700"}>
                    Xóa
                  </Text>
                </Flex>
              </List.Item>
            </List.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
