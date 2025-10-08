"use client";

import { Box, Container, Heading, Text, VStack, HStack, Button, Icon, Flex } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Hero() {
  return (
    <Flex as="section" id="about" minH="100vh" align="center" justify="center" bg="gray.900" pt={{ base: 20, md: 0 }}>
      <Container maxW="container.md" zIndex={1}>
        <VStack spacing={6} textAlign="center">
          <MotionHeading
            as="h1"
            size="2xl"
            fontFamily="mono"
            color="gray.200"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text as="span" color="brand.500">
              {"//"}
            </Text>{" "}
            Adrian Neagu
          </MotionHeading>

          <MotionText
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.300"
            maxW="lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cloud Support Engineer @ Cognizant for Google Cloud Platform
          </MotionText>

          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="brand.500"
            maxW="lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Serverless • Cloud Databases • Cloud Storage • GCP Specialist
          </MotionText>

          <MotionBox initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <HStack spacing={4}>
              <Button as="a" href="#projects" variant="outline" size="lg">
                Explore My Work
              </Button>
              <Button as="a" href="/resume.pdf" download size="lg" colorScheme="brand" leftIcon={<Icon as={FiDownload} />}>
                Download CV
              </Button>
            </HStack>
          </MotionBox>

          {/* Social Links */}
          <HStack spacing={6} pt={8}>
            <MotionLink href="https://github.com/EidriiaN" icon={FiGithub} delay={0.6} />
            <MotionLink href="https://www.linkedin.com/in/adrian-neagu-0838a0243/" icon={FiLinkedin} delay={0.7} />
            <MotionLink href="mailto:adrian.neagu@gcloud.ro" icon={FiMail} delay={0.8} />
          </HStack>
        </VStack>
      </Container>
    </Flex>
  );
}

const MotionLink = ({ href, icon, delay }) => (
  <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
    <Button as="a" href={href} target="_blank" variant="ghost" color="gray.500" _hover={{ color: "brand.500" }}>
      <Icon as={icon} boxSize={6} />
    </Button>
  </MotionBox>
);
