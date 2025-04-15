import React, { useState } from "react";
import Task from "../components/Task.tsx";
import { Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { testTasks } from "../data/tasks.ts";

const Home = () => {
  const [tasks, setTasks] = useState(testTasks);
  return (
    <Grid gridTemplateColumns="1fr 1fr" p="20px">
      <GridItem>
        <Flex height="100%" alignItems="center">
          <Text fontSize="68px">Task System</Text>
        </Flex>
      </GridItem>
      <GridItem>
        <VStack width="100%" maxH="100vh" overflow="auto">
          {testTasks.map((task) => (
            <Task task={task} />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Home;
