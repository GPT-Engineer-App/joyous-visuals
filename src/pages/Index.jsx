import { Box, Circle, Container, Flex, Heading, Square, Text, VStack } from "@chakra-ui/react";
import InteractiveShape from "../components/InteractiveShape";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Flex justifyContent="center">
          <Heading as="h1" size="3xl" mb={8} fontWeight="black" letterSpacing="wider">
            Joyous Visuals
          </Heading>
        </Flex>
        <Box>
          <Text fontSize="2xl" mb={4} fontWeight="bold">
            Shapes & Colors
          </Text>
          <Flex justify="space-around">
            <InteractiveShape>
              <Circle size="120px" bg="brand.900" />
            </InteractiveShape>
            <InteractiveShape>
              <Square size="120px" bg="brand.700" />
            </InteractiveShape>
            <InteractiveShape>
              <Box height="120px" width="120px" bg="brand.600" borderRadius="30px" />
            </InteractiveShape>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="2xl" mb={4} fontWeight="bold">
            Typography
          </Text>
          <VStack>
            <Text fontSize="3xl" fontWeight="black" color="brand.500">
              Bold & Vibrant
            </Text>
            <Text fontSize="2xl" fontWeight="medium" color="brand.800">
              Creative & Italic
            </Text>
            <Text fontSize="xl" letterSpacing="widest" color="brand.700">
              Wide Letter Spacing
            </Text>
          </VStack>
        </Box>
        <Box>
          <Text fontSize="2xl" mb={4} fontWeight="bold">
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
