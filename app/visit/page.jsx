"use client";
import { CheckCircleIcon, LinkIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./style.css";

const Visit = () => {
  return (
    <Flex direction="column ">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading fontSize={{ base: "34px", md: "48" }} fontWeight="800">
          ABOUT PROJECT
        </Heading>
        <Text
          _selection={{ backgroundColor: "red", color: "white" }}
          textAlign="justify"
          p={{ base: "20px 0px", md: "40px" }}
          w="64%"
        >
          In this project, we have to design and develop an eCommerce website
          and mobile apps for both iOS and Android platforms. The client aimed
          at transforming all type of businesses by removing the barriers in
          procurement, sales, management, and marketing using the latest IT
          technologies.
        </Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading fontSize={{ base: "34px", md: "48" }} fontWeight="800">
          A SNEEKY PEEKS
        </Heading>
        <Text
          _selection={{ backgroundColor: "red", color: "white" }}
          textAlign="justify"
          p={{ base: "20px 0px", md: "40px" }}
          w="64%"
        >
          A glimpse of stunning, fully functional open-source eCommerce site
          from initiation to execution.
        </Text>
        <Flex className="color-list items" gap="5" padding="30px" mt="40px">
          <Flex className="color  ">
            {" "}
            <Image minW="100%" minH="300px" src="/one.svg" />
          </Flex>
          <Flex className="color  ">
            {" "}
            <Image minW="100%" minH="300px" src="/two.svg" />
          </Flex>
          <Flex className="color ">
            {" "}
            <Image minW="100%" minH="300px" src="/three.svg" />
          </Flex>
          <Flex className="color ">
            {" "}
            <Image minW="100%" minH="300px" src="/four.svg" />
          </Flex>
          <Flex className="color">
            {" "}
            <Image minW="100%" minH="300px" src="/five.svg" />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading fontSize={{ base: "34px", md: "48" }} fontWeight="800">
          CHALLANGE
        </Heading>
        <Text
          _selection={{ backgroundColor: "red", color: "white" }}
          textAlign="justify"
          p={{ base: "20px 0px", md: "40px" }}
          w="64%"
        >
          Topsun Bazar client needed a new look for their website and mobile
          apps - everything to be revamped. They wanted to add more vibrancy to
          the entire theme with refined app’s interface. One of the biggest
          challenges was that the existing portal lacks user-friendly interface,
          so we upgraded the technology to ASP.Net and Magento with Angular JS
          and Mongo DB. Migration of all data from old to the new website was a
          tough task to cope with. But, we did it and delivered the project
          successfully in the scheduled time frame.
        </Text>
      </Flex>
      <Flex
        backgroundImage="/bgimg.jpg"
        minH="500px"
        backgroundAttachment="fixed"
        backgroundPosition="center "
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        justifyContent="space-evenly"
        // textAlign="center"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Flex direction="column" gap="20px" p="20px">
          <Search2Icon boxSize={20} />
          <Heading>
            Client
            <br /> Location
          </Heading>
          <Text fontSize="30px" fontWeight="700px">
            {" "}
            Pakistan
          </Text>
        </Flex>
        <Flex direction="column" gap="15px" p="20px">
          <CheckCircleIcon boxSize={20} />
          <Heading>
            DEDICATED
            <br /> TEAM
          </Heading>
          <Text fontSize="30px" fontWeight="700px">
            {" "}
            1 Designer
          </Text>
          <Text fontSize={{ base: "20px", md: "30px" }} fontWeight="700px">
            {" "}
            6 Developers
          </Text>
          <Text fontSize={{ base: "20px", md: "30px" }} fontWeight="700px">
            {" "}
            1 Project Manager
          </Text>
        </Flex>
        <Flex p="20px" direction="column" gap="15px">
          <LinkIcon boxSize={20} />
          <Heading>
            TIMELINE OF
            <br /> PROJECT
          </Heading>
          <Text fontSize="30px" fontWeight="700px">
            {" "}
            6 Months
          </Text>
        </Flex>
      </Flex>
      <Flex
        backgroundColor="lightgray"
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt="40px"
      >
        <Heading fontSize={{ base: "34px", md: "48" }} fontWeight="800">
          TECHNOLOGY
        </Heading>
        <Flex
          gap={{ base: "5", md: "40" }}
          margin="50px"
          direction={{ base: "column", lg: "row" }}
          r
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image src="/icon1.png" h="220px" width="250px" />
            <Text fontWeight="bold">React JS</Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            gap="15px"
            direction="column"
          >
            <Image src="/icon2.png" h="230px" width="300px" />
            <Text fontWeight="bold">Next JS</Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            gap="15px"
            direction="column"
          >
            <Image
              src="/icon3.png"
              borderRadius="full"
              h="250px"
              width="250px"
            />
            <Text fontWeight="bold">Chakra UI</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Flex justifyContent="center">
          <Image src="/last.png" />
        </Flex>
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Heading fontSize="48px" fontWeight="700" mt="30px">
            GET IN <span style={{ color: "#F17701" }}> TOUCH </span>
          </Heading>
          <Text color="#F17701 " fontSize="28px" fontWeight="800px">
            +92.3035232873
          </Text>
          <Text fontSize="28px" fontWeight="bold">
            Ar@geekyBugs.com
          </Text>
          <Button
            borderColor="#F17701 "
            mt="40px"
            mb="40px"
            variant="outline"
            color="#F17701"
            _hover={{ color: "white", backgroundColor: "#F17701" }}
          >
            {" "}
            LETS TALK ABOUT YOUR PROJECT
          </Button>
        </Flex>
      </Flex>
      {/* <Flex height="500px">hey</Flex> */}
    </Flex>
  );
};

export default Visit;
