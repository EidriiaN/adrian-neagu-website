"use client";

import { Box, Container, Flex, HStack, Link, Text, Icon } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" py={6}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={4}>
          <Text color="gray.500" fontSize="sm">
            &copy; {new Date().getFullYear()} Adrian Neagu. All rights reserved.
          </Text>

          <HStack spacing={4}>
            <Link href="https://github.com/EidriiaN" isExternal color="gray.500" _hover={{ color: "brand.500" }}>
              <Icon as={FiGithub} boxSize={5} />
            </Link>
            <Link href="https://www.linkedin.com/in/adrian-neagu-0838a0243/" isExternal color="gray.500" _hover={{ color: "brand.500" }}>
              <Icon as={FiLinkedin} boxSize={5} />
            </Link>
            <Link href="mailto:adrian.neagu@gcloud.ro" isExternal color="gray.500" _hover={{ color: "brand.500" }}>
              <Icon as={FiMail} boxSize={5} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
