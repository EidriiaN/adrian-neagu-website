"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLightbulb, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  "Google Cloud Platform (GCP)",
  "Cloud Serverless (Cloud Functions, Cloud Run)",
  "Cloud SQL & Database Migration Service",
  "Cloud-Native Databases (Firestore, Bigtable)",
  "Cloud Storage Solutions (GCS, Filestore)",
  "Serverless Architecture",
  "Cloud Security & IAM",
  "Data Governance",
  "IT Digital Transformation",
  "Artificial Intelligence (AI)",
  "Cloud Computing",
  "Networking & VPC",
  "Docker & Containerization",
  "Web Development",
];

const projects = [
  {
    title: "MySQL Database Migration to Cloud SQL",
    description:
      "Successfully implemented MySQL database migration to Cloud SQL using Google's Database Migration Service, providing smooth transition paths for customers while ensuring data governance, security, and minimal downtime.",
  },
  {
    title: "Cloud Storage Architecture Design",
    description:
      "Designed and implemented optimal cloud storage solutions using Google Cloud Storage and Filestore, creating data lifecycle policies and configuring secure access patterns for enterprise applications.",
  },
  {
    title: "Serverless API with Cloud Functions & Firestore",
    description:
      "Developed serverless REST APIs using Cloud Functions integrated with Firestore database, implementing proper authentication, optimization techniques, and monitoring for mission-critical applications.",
  },
  {
    title: "Web Application Hosting on Google Cloud",
    description:
      "Built and deployed scalable websites on Google Cloud Platform, implementing best practices for security, performance, and cost optimization using Cloud Run, App Engine, and other serverless technologies.",
  },
  {
    title: "Cloud Security Implementation",
    description:
      "Designed and documented security best practices for GCP environments, including IAM policies, VPC Service Controls, and encryption strategies for sensitive customer data.",
  },
];

const Section = ({ children, id, ...rest }) => (
  <Box as="section" id={id} py={{ base: 16, md: 24 }} {...rest}>
    <Container maxW="container.lg">{children}</Container>
  </Box>
);

const SectionHeading = ({ children }) => (
  <Heading as="h2" size="xl" fontFamily="mono" color="gray.400" mb={12} textAlign="center">
    <Text as="span" color="brand.500">
      {"// "}
    </Text>
    {children}
  </Heading>
);

export default function Main() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({
        type: "success",
        message: "Message sent. I'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="gray.900">
      {/* About Section */}
      <Section id="about-main">
        <VStack spacing={6} textAlign="center" maxW="3xl" mx="auto">
          <Heading as="h2" size="2xl" color="gray.50">
            Hi, I&apos;m Adrian.
          </Heading>
          <Text color="gray.300" fontSize="lg" lineHeight="relaxed">
            As a Cloud Support Engineer at Cognizant Romania on behalf of Google Cloud Platform, I primarily work with cloud serverless technologies
            (Cloud Functions, Cloud Run), cloud databases (Cloud SQL, Spanner), cloud-native databases (Firestore, Bigtable), and cloud storage
            solutions (Cloud Storage, Filestore). I&apos;m currently pursuing a Master&apos;s in Advanced Information Processing Technologies while
            helping customers navigate their cloud journey with effective troubleshooting, disaster recovery strategies, and technical guidance.
          </Text>
          <Text color="gray.300" fontSize="lg" lineHeight="relaxed" pt={4}>
            Based in Romania, I balance my professional work with content creation and continuously expanding my cloud computing expertise. I&apos;m
            enthusiastic about designing robust cloud architectures and optimizing database performance across various GCP services. Recently,
            I&apos;ve been expanding my knowledge in AI and ChatGPT applications for business, focusing on strategic frameworks for digital
            transformation.
          </Text>
        </VStack>
      </Section>

      {/* Skills Section */}
      <Section id="skills" bg="gray.800">
        <SectionHeading>Skills</SectionHeading>
        <Flex wrap="wrap" justify="center" gap={4}>
          {skills.map((skill) => (
            <Box
              key={skill}
              bg="gray.700"
              borderRadius="md"
              px={4}
              py={2}
              border="1px"
              borderColor="gray.600"
              transition="all 0.2s"
              _hover={{
                borderColor: "brand.500",
                color: "brand.500",
              }}
            >
              <Text fontWeight="medium">{skill}</Text>
            </Box>
          ))}
        </Flex>
      </Section>

      {/* Education & Career Section */}
      <Section id="education">
        <SectionHeading>Education & Career</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
          <Box bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700">
            <Flex align="center" mb={4}>
              <Box as={FaGraduationCap} color="brand.500" mr={2} fontSize="xl" />
              <Heading as="h3" size="md" color="gray.50">
                Education
              </Heading>
            </Flex>
            <VStack align="start" spacing={3}>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Master&apos;s Degree (In Progress)
                </Text>
                <Text color="gray.300">Advanced Information Processing Technologies</Text>
                <Text fontSize="sm" color="gray.400">
                  Petroleum-Gas University of Ploiești
                </Text>
                <Text fontSize="sm" color="gray.400">
                  Oct 2024 - Present
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Bachelor&apos;s Degree
                </Text>
                <Text color="gray.300">Computer Science</Text>
                <Text fontSize="sm" color="gray.400">
                  Petroleum-Gas University of Ploiești
                </Text>
                <Text fontSize="sm" color="gray.400">
                  Oct 2020 - Jul 2024
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700">
            <Flex align="center" mb={4}>
              <Box as={FaBriefcase} color="brand.500" mr={2} fontSize="xl" />
              <Heading as="h3" size="md" color="gray.50">
                Career Goals
              </Heading>
            </Flex>
            <VStack align="start" spacing={3}>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Short-term
                </Text>
                <Text color="gray.300">Complete Master&apos;s program successfully</Text>
                <Text color="gray.300">Obtain Google Cloud Professional certifications</Text>
                <Text color="gray.300">Develop expertise in cloud architecture and security</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Long-term
                </Text>
                <Text color="gray.300">Progress to Senior Cloud Engineer position</Text>
                <Text color="gray.300">Lead cloud infrastructure projects</Text>
                <Text fontSize="sm" color="gray.400">
                  Preference for remote or hybrid positions based in Romania
                </Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700" mb={4}>
          <Flex align="center" mb={4}>
            <Box as={FaBriefcase} color="brand.500" mr={2} fontSize="xl" />
            <Heading as="h3" size="md" color="gray.50">
              Professional Experience
            </Heading>
          </Flex>
          <Box mb={5}>
            <Text fontWeight="bold" color="brand.500">
              Cloud Support Engineer
            </Text>
            <Text color="gray.300">Cognizant (for Google Cloud Platform)</Text>
            <Text fontSize="sm" color="gray.400">
              June 2024 - Present · 1 yr 5 mos
            </Text>
            <Text fontSize="sm" color="gray.400" mb={2}>
              Bucharest, Romania
            </Text>
            <VStack align="start" spacing={2} mt={3} pl={4} borderLeft="2px" borderColor="gray.700">
              <Text color="gray.300">
                • Specialized in cloud serverless (Cloud Functions, Cloud Run) and cloud storage solutions (GCS, Filestore)
              </Text>
              <Text color="gray.300">• Managed cloud-native databases (Firestore, Bigtable) and relational databases (Cloud SQL)</Text>
              <Text color="gray.300">• Performed MySQL data migrations to Cloud SQL using Database Migration Service</Text>
              <Text color="gray.300">• Implemented cloud security, data governance, and digital transformation strategies</Text>
              <Text color="gray.300">• Guided customers on best practices for running critical workloads on GCP</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" color="brand.500">
              Software Developer Internship
            </Text>
            <Text color="gray.300">Keep It Mobile</Text>
            <Text fontSize="sm" color="gray.400">
              July 2023 - September 2023 · 3 mos
            </Text>
            <Text fontSize="sm" color="gray.400" mb={2}>
              Ploiesti, Romania
            </Text>
            <VStack align="start" spacing={2} mt={3} pl={4} borderLeft="2px" borderColor="gray.700">
              <Text color="gray.300">• Participated in software development projects as a student during bachelor&apos;s studies</Text>
              <Text color="gray.300">• Gained practical experience with web development technologies</Text>
              <Text color="gray.300">• Collaborated with team members on application development and testing</Text>
            </VStack>
          </Box>
        </Box>

        <Box id="ai-interests" bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700" mb={4}>
          <Flex align="center" mb={4}>
            <Box as={FaLightbulb} color="brand.500" mr={2} fontSize="xl" />
            <Heading as="h3" size="md" color="gray.50">
              AI & Future Interests
            </Heading>
          </Flex>
          <Text color="gray.300" mb={4}>
            I&apos;m currently expanding my expertise in artificial intelligence and its business applications. My recent focus includes:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={4}>
            <Box p={4} bg="gray.900" borderRadius="md">
              <Text fontWeight="bold" color="brand.500" mb={2}>
                Strategic AI Implementation
              </Text>
              <Text color="gray.300">
                Learning high-level strategic frameworks for understanding AI&apos;s impact on business and implementing IT digital transformation
                strategies with data governance best practices.
              </Text>
            </Box>
            <Box p={4} bg="gray.900" borderRadius="md">
              <Text fontWeight="bold" color="brand.500" mb={2}>
                Generative AI & ChatGPT
              </Text>
              <Text color="gray.300">
                Developing advanced prompt engineering skills and exploring workflow automation through generative AI applications in professional
                environments, with focus on security and trust in AI implementations.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700" mb={4}>
          <Flex align="center" mb={4}>
            <Box as={FaCertificate} color="brand.500" mr={2} fontSize="xl" />
            <Heading as="h3" size="md" color="gray.50">
              Certifications & Courses
            </Heading>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={4}>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Google Cloud
              </Text>
              <Text color="gray.300">Cloud Digital Leader Certification</Text>
              <Text fontSize="sm" color="gray.400">
                Issued Aug 2025 · Expires Aug 2028
              </Text>
              <Text fontSize="xs" color="gray.500">
                Credential ID fd17ca6631f342a19d561c1665a60bb5
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Google Cloud Skill Badge
              </Text>
              <Text color="gray.300">Migrate MySQL data to Cloud SQL</Text>
              <Text fontSize="sm" color="gray.400">
                Issued Jul 2024
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Google Cloud Skill Badge
              </Text>
              <Text color="gray.300">Build a Website on Google Cloud</Text>
              <Text fontSize="sm" color="gray.400">
                Issued Jul 2024
              </Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Udemy
              </Text>
              <Text color="gray.300">Executive Briefing: AI + ChatGPT</Text>
              <Text fontSize="sm" color="gray.400">
                October 2025
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Udemy
              </Text>
              <Text color="gray.300">Complete ChatGPT Course For Work</Text>
              <Text fontSize="sm" color="gray.400">
                October 2025
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="brand.500">
                Google Cloud
              </Text>
              <Text color="gray.300">Internal Technical Trainings</Text>
              <Text fontSize="sm" color="gray.400">
                2023-2025
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box id="awards" bg="gray.800" p={6} borderRadius="lg" border="1px" borderColor="gray.700" mb={4}>
          <Flex align="center" mb={4}>
            <Box as={FaTrophy} color="brand.500" mr={2} fontSize="xl" />
            <Heading as="h3" size="md" color="gray.50">
              Awards
            </Heading>
          </Flex>
          <Box>
            <Text fontWeight="bold" color="brand.500">
              ICDD Award for Imagination
            </Text>
            <Text color="gray.300">Sixth International Conference on Applied Informatics</Text>
            <Text color="gray.300">Imagination, Creativity, Design, Development - ICDD Sibiu 2022</Text>
            <Text fontSize="sm" color="gray.400" mt={2}>
              May 5-7, 2022
            </Text>
            <Box mt={3} p={4} bg="gray.900" borderRadius="md">
              <Text color="gray.300" fontSize="sm" fontStyle="italic">
                &quot;This Diploma is awarded to Adrian Gheorghiță Neagu from Petroleum-Gas University of Ploiesti, ROMANIA in recognition of valuable
                scientific contribution within The International Conference on Applied Informatics Imagination, Creativity, Design, Development&quot;
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Section Divider */}
      <Box py={8} bg="gray.900">
        <Container maxW="container.lg">
          <Flex align="center" justify="center">
            <Box w="100%" h="1px" bg="gray.800" />
            <Box as="span" px={4} color="brand.500" fontSize="2xl" fontWeight="bold">
              {"</>"}
            </Box>
            <Box w="100%" h="1px" bg="gray.800" />
          </Flex>
        </Container>
      </Box>

      {/* Projects Section */}
      <Section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                align="start"
                spacing={4}
                p={6}
                bg="gray.800"
                borderRadius="lg"
                border="1px"
                borderColor="gray.700"
                h="100%"
                transition="border-color 0.2s"
                _hover={{ borderColor: "brand.500" }}
              >
                <Heading as="h3" size="md" color="gray.50">
                  {project.title}
                </Heading>
                <Text color="gray.300">{project.description}</Text>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bg="gray.800">
        <SectionHeading>Contact</SectionHeading>
        <Box maxW="lg" mx="auto">
          {formStatus.message && (
            <Alert status={formStatus.type === "success" ? "success" : "error"} variant="subtle" borderRadius="md" mb={6}>
              <AlertIcon />
              {formStatus.message}
            </Alert>
          )}
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  isDisabled={isSubmitting}
                  focusBorderColor="brand.500"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  isDisabled={isSubmitting}
                  focusBorderColor="brand.500"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={5}
                  isDisabled={isSubmitting}
                  focusBorderColor="brand.500"
                />
              </FormControl>
              <Button type="submit" variant="outline" size="lg" w="full" isLoading={isSubmitting} loadingText="Sending...">
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>
      </Section>
    </Box>
  );
}
