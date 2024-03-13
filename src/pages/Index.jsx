import React, { useState } from "react";
import { Box, Container, Flex, Select, Heading, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

const Index = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");

  const handleClassChange = (event) => setSelectedClass(event.target.value);
  const handleSectionChange = (event) => setSelectedSection(event.target.value);
  const handleExamTypeChange = (event) => setSelectedExamType(event.target.value);

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justifyContent="space-between" mb={8}>
        <Select placeholder="Select Class" value={selectedClass} onChange={handleClassChange}>
          {[...Array(10).keys()].map((number) => (
            <option key={`class-${number + 1}`} value={`Class ${number + 1}`}>
              Class {number + 1}
            </option>
          ))}
        </Select>

        <Select placeholder="Select Section" value={selectedSection} onChange={handleSectionChange}>
          {["A", "B", "C", "D"].map((section) => (
            <option key={`section-${section}`} value={section}>
              Section {section}
            </option>
          ))}
        </Select>

        <Select placeholder="Select Exam Type" value={selectedExamType} onChange={handleExamTypeChange}>
          {["Exam 1", "Exam 2"].map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </Select>
      </Flex>

      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading as="h3" size="lg" p={4} bg="blue.100" textAlign="center">
          Exam Time Table
        </Heading>
        <Table variant="simple">
          <Thead bg="blue.50">
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Subject</Th>
              <Th>Duration</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Placeholder rows for the exam timetable */}
            <Tr>
              <Td>2023-04-10</Td>
              <Td>10:00 AM</Td>
              <Td>Mathematics</Td>
              <Td>2 Hours</Td>
            </Tr>
            <Tr>
              <Td>2023-04-11</Td>
              <Td>10:00 AM</Td>
              <Td>Science</Td>
              <Td>2 Hours</Td>
            </Tr>
            {/* ... more rows */}
          </Tbody>
        </Table>
      </Box>

      {selectedClass && selectedSection && selectedExamType && (
        <Text mt={4}>
          Displaying timetable for {selectedClass}, Section {selectedSection}, {selectedExamType}
        </Text>
      )}
    </Container>
  );
};

export default Index;
