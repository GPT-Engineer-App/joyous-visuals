import { Box, Circle, Container, Flex, Heading, Square, Text, VStack, keyframes } from "@chakra-ui/react";
import { FaPaintBrush } from "react-icons/fa";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

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
            <Circle size="100px" bg="gray.300" _hover={{ bg: "gray.400", transform: "scale(1.1)" }} animation={`${spin} infinite 20s linear`} />
            <Square size="100px" bg="gray.300" _hover={{ bg: "gray.400", transform: "scale(1.1)" }} animation={`${spin} infinite 20s linear`} />
            <Box height="100px" width="100px" bg="gray.300" borderRadius="20px" _hover={{ bg: "gray.400", transform: "scale(1.1)" }} animation={`${spin} infinite 20s linear`} />
          </Flex>
        </Box>
        <Box>
          <Text fontSize="xl" mb={2}>
            Typography
          </Text>
          <VStack>
            <Flex direction={["column", "row"]} wrap="wrap" justify="space-between">
              <Text fontSize="2xl" fontWeight="hairline" color="black">
                Bold & Vibrant
              </Text>
              <Text fontSize="lg" fontWeight="normal" color="black">
                Creative & Italic
              </Text>
              <Text fontSize="md" fontWeight="light" color="black">
                Wide Letter Spacing
              </Text>
            </Flex>
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
