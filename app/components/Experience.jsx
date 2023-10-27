"use client";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./2style.css";
import drinkApp from "../../public/drink.png";

import Link from "next/link";

const Experience = () => {
  return (
    <>
      <Flex
        id="experience"
        bgColor="#000"
        color="white"
        direction="column"
        p={{ base: "10px", lg: "100px" }}
      >
        <Flex justifyContent="center" alignItems="center">
          {" "}
          <Heading mt="38px" fontSize="48" fontWeight="700">
            Experience
          </Heading>
        </Flex>
        <Flex
          justifyContent="space-around"
          m="20px 40px"
          alignItems="center"
          border="1px solid white"
          p={{ base: "10px", lg: "30px" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            maxHeight="100px"
            className="zoom"
            m="40px"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/next.png" alt="Dan Abramov" />{" "}
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              odio!
            </Text>
          </Flex>
          <Flex
            className="zoom"
            m="40px"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Image src="/react.png" alt="Dan Abramov" />{" "}
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              odio!
            </Text>
          </Flex>
          <Flex
            className="zoom"
            m="40px"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Image
              borderRadius="full"
              src="/chakra.png"
              alt="Dan Abramov"
            />{" "}
            <Heading>Chakra UI</Heading>
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              odio!
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="portfolio"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        padding="50px"
      >
        <Heading mt="75px" fontSize="48" fontWeight="700">
          Project
        </Heading>
        <Button
          justifyContent="center"
          alignItems="center"
          p="24px 12px"
          fontSize="16px"
          fontWeight="500px"
          bgColor="#0AF"
          borderRadius="30px"
          w="205px"
          _hover="none"
          mt="59px"
        >
          Website Development
        </Button>
        <Flex
          mt="59px"
          mb="133px"
          direction={{ base: "column", lg: "row" }}
          gap="20px"
        >
          <Flex direction="column" gap="20px">
            <Flex direction="column" gap="20px">
              <Flex alignItems="center" gap="10px" className="screen">
                <img src="/reel2.jpg" />
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                my
              >
                <Heading fontSize="25px" fontWeight="800px">
                  Job Hunt
                </Heading>
                <Text
                  fontSize="10px"
                  fontWeight="400px"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="349px"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
                  nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
                  fames.
                </Text>
                <Link href="/visit">
                  <Button
                    justifyContent="center"
                    alignItems="center"
                    p="20px 10px"
                    fontSize="16px"
                    fontWeight="500px"
                    bgColor="#0AF"
                    borderRadius="30px"
                    color="white"
                    w="108px"
                    _hover="none"
                    m="10px"
                  >
                    Visit Site
                  </Button>
                </Link>
              </Flex>
            </Flex>{" "}
            {/* <Flex
              direction="column"
              alignItems="center"
              gap="10px"
              className="image-container"
            >
              <Image className="img" src="/powerplay.svg" />
              <Heading className="text" fontSize="25px" fontWeight="800px">
                PowerPlay System
              </Heading>
              <Text
                fontSize="10px"
                fontWeight="400px"
                justifyContent="center"
                alignItems="center"
                maxWidth="349px"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
                nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
                fames.
              </Text>

              <Link href="/visit">
                <Button
                  justifyContent="center"
                  alignItems="center"
                  p="20px 10px"
                  fontSize="16px"
                  fontWeight="500px"
                  bgColor="#0AF"
                  borderRadius="30px"
                  color="white"
                  w="108px"
                  _hover="none"
                  m="10px"
                >
                  Visit Site
                </Button>
              </Link>
            </Flex> */}
            {/* <Flex direction="column" gap="20px">
              <Flex alignItems="center" gap="10px" className="screen">
                <img src="/reel2.jpg" />
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading fontSize="25px" fontWeight="800px">
                  Job Hunttt
                </Heading>
                <Text
                  fontSize="10px"
                  fontWeight="400px"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="349px"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
                  nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
                  fames.
                </Text>
                <Link href="/visit">
                  <Button
                    justifyContent="center"
                    alignItems="center"
                    p="20px 10px"
                    fontSize="16px"
                    fontWeight="500px"
                    bgColor="#0AF"
                    borderRadius="30px"
                    color="white"
                    w="108px"
                    _hover="none"
                    m="10px"
                  >
                    Visit Site
                  </Button>
                </Link>
              </Flex>
            </Flex> */}
          </Flex>
          <Flex direction="column" gap="20px">
            {" "}
            <Flex direction="column" gap="20px">
              <Flex alignItems="center" gap="10px" className="screen2">
                <img src="/drink2.jpg" />
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading fontSize="25px" fontWeight="800px">
                  Drink app
                </Heading>
                <Text
                  fontSize="10px"
                  fontWeight="400px"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="349px"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
                  nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
                  fames.
                </Text>
                <Link href="/visit">
                  <Button
                    justifyContent="center"
                    alignItems="center"
                    p="20px 10px"
                    fontSize="16px"
                    fontWeight="500px"
                    bgColor="#0AF"
                    borderRadius="30px"
                    color="white"
                    w="108px"
                    _hover="none"
                    m="10px"
                  >
                    Visit Site
                  </Button>
                </Link>
              </Flex>
            </Flex>
            {/* <Flex direction="column" gap="20px">
              <Flex alignItems="center" gap="10px" className="screen">
                <img src="/drink2.png" />
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                my
              >
                <Heading fontSize="25px" fontWeight="800px">
                  Drink App
                </Heading>
                <Text
                  fontSize="10px"
                  fontWeight="400px"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="349px"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
                  nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
                  fames.
                </Text>
                <Link href="/visit">
                  <Button
                    justifyContent="center"
                    alignItems="center"
                    p="20px 10px"
                    fontSize="16px"
                    fontWeight="500px"
                    bgColor="#0AF"
                    borderRadius="30px"
                    color="white"
                    w="108px"
                    _hover="none"
                    m="10px"
                  >
                    Visit Site
                  </Button>
                </Link>
              </Flex>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Experience;
