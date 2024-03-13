import { Box, Circle, Container, Flex, Heading, Square, Text, VStack } from "@chakra-ui/react";
import { FaPaintBrush } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Flex justifyContent="center">
          <Heading as="h1" size="2xl" mb={4}>
            Art Project <FaPaintBrush />
          </Heading>
        </Flex>
        <Box>
          <Text fontSize="xl" mb={2}>
            Shapes & Colors
          </Text>
          <Flex justify="space-around">
            <Circle size="100px" bg="red.200" />
            <Square size="100px" bg="green.200" />
            <Box height="100px" width="100px" bg="blue.200" borderRadius="20px" />
          </Flex>
        </Box>
        <Box>
          <Text fontSize="xl" mb={2}>
            Typography
          </Text>
          <VStack>
            <Text fontSize="2xl" fontWeight="bold" color="purple.500">
              Bold & Vibrant
            </Text>
            <Text fontSize="lg" fontStyle="italic" color="orange.300">
              Creative & Italic
            </Text>
            <Text fontSize="md" letterSpacing="wider" color="teal.400">
              Wide Letter Spacing
            </Text>
          </VStack>
        </Box>
        <Box>
          <Text fontSize="xl" mb={2}>
            Joyful Composition
          </Text>
          <Flex align="center" justify="center">
            <Circle size="50px" bg="yellow.300" mr={2} />
            <Text fontSize="lg" fontWeight="semibold">
              +
            </Text>
            <Square size="50px" bg="pink.300" ml={2} />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
