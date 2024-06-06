import React from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1527334919515-b8dee906a34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d2l0Y2glMjBsb2dvfGVufDB8fHx8MTcxNzY1Mjc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Twitch Logo" boxSize="50px" />
          <Input placeholder="Search" size="md" width="300px" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </HStack>
        <Navigation />
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }}>
        {/* Sidebar */}
        <VStack align="start" spacing={4} width="20%" p={4} borderRight="1px solid #e2e8f0">
          <Heading size="md">Categories</Heading>
          <Text>Just Chatting</Text>
          <Text>Gaming</Text>
          <Text>Music</Text>
          <Text>Esports</Text>
          <Text>Creative</Text>
        </VStack>

        {/* Video Feed */}
        <Box flex="1" p={4}>
          <Heading size="lg" mb={4}>
            Live Channels
          </Heading>
          <Flex wrap="wrap" spacing={4}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Box key={index} width="45%" m={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1453503795393-c496eee08c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxNzY1Mjc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Live Stream Thumbnail" />
                <Box p={4}>
                  <Heading size="md">Streamer {index + 1}</Heading>
                  <Text>Category</Text>
                  <Text>Viewers: {Math.floor(Math.random() * 10000)}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
