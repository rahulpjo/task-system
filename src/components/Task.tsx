import React, { Box, Checkbox, Flex, Text, VStack } from "@chakra-ui/react";

interface TaskItem {
  title: string;
  description: string;
  dueDate?: Date;
}

interface TaskProps {
  task: TaskItem;
}

const Task = ({ task }: TaskProps) => {
  const { title, description, dueDate } = task;
  return (
    <Box
      padding="1px"
      borderRadius="7px"
      width="100%"
      transition="all 1s ease"
      background={`linear-gradient(225deg, red, orange, yellow, green, blue, violet, red)`}
      _hover={{
        background: `linear-gradient(45deg, red, orange, yellow, green, blue, violet, red)`,
      }}
    >
      <Checkbox
        border="1px solid gray"
        p="10px 20px"
        borderRadius="7px"
        background="#282c34"
        display="flex"
      >
        <Flex flexDirection="column" alignItems="start">
          <Text fontWeight={700} fontSize="18px" m="0" p="0" color="white">
            {title}
          </Text>
          <Text color="white">{description}</Text>
        </Flex>
      </Checkbox>
    </Box>
  );
};

export default Task;
