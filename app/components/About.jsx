"use client";

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Stack from "./Stack";
import "./styleimg.css";

const About = () => {
  return (
    <>
      <Flex
        id="about"
        h={{ base: "650px", md: "500px" }}
        bgColor="#000000 "
        margin="auto"
        justifyContent="center"
        alignItems="center"
        p="30px"
        gap={{ base: "65px", md: "165px", lg: "265px" }}
        direction={{ base: "column-reverse  ", md: "row" }}
      >
        <Flex direction="column" textAlign="center">
          <Text fontSize="24px" fontWeight="400" color="white">
            Hello, I’m
          </Text>
          <Text
            fontSize="48px"
            fontWeight="700"
            lineHeight="48px "
            color="white"
            className="content"
          >
            Abdul Rehman
          </Text>

          <Stack />
          <Button p="16px 32px" borderRadius="30" maxW="144px" mt="40px">
            About me
          </Button>
        </Flex>
        <Flex pt="40px" position="inherit">
          {" "}
          <Image
            // pt="50px"
            className="zoom"
            borderRadius="full"
            boxSize={{ base: "250px", md: "350px" }}
            src="/mine.jpg"
            alt="Dan Abramov"
          />{" "}
        </Flex>
      </Flex>

      <Flex
        h={{ base: "650px", md: "500px" }}
        mt={{ base: "30px" }}
        gap={{ base: "30px", lg: "80px" }}
        p={{ base: "20px" }}
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
      >
        <Image className="zoom" src="/profile.svg" alt="Dan Abramov" />
        <Flex direction="column" id="about">
          <Text fontSize="32px" fontWeight="700">
            ABOUT ME
          </Text>
          <Text
            flexWrap="wrap"
            mt="8px"
            fontSize="16px"
            fontWeight="400"
            w={{ base: "auto", md: "544px" }}
            color="#747474"
          >
            I am Fresh Graduate and I started Internhip plan In Geekybugs. I
            Started My Journey with Frontend Development In REACT JS,NEXT JS and
            CHAKRA UI.I love to be a software developer rather than a language
            dependent developer.
          </Text>
          <Button
            mt="40px"
            color="white"
            w="124px"
            bgColor="#00AAFF"
            borderRadius="30px"
          >
            {" "}
            Hire me
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
