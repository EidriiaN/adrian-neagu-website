"use client";

import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Container, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "AI Interests", href: "#ai-interests" },
  { name: "Awards", href: "#awards" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(18, 18, 18, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="gray.700"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <Text fontSize="xl" fontWeight="bold" color="brand.500">
              AN
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="md"
                fontWeight="medium"
                color="gray.300"
                _hover={{
                  color: "brand.500",
                  textDecoration: "none",
                }}
                transition="color 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            variant="ghost"
            color="brand.500"
            _hover={{ bg: "gray.800" }}
          />
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onToggle}
                  fontSize="md"
                  fontWeight="medium"
                  color="gray.300"
                  _hover={{
                    color: "brand.500",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
