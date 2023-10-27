"use client";
import React from "react";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Button,
  IconButton,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import fb from "../../public/fb.svg";
import twitter from "../../public/twitter.svg";
import linkedin from "../../public/ri_linkedin-fill.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex
        position="fixed"
        zIndex="1"
        w="100%"
        top="0.1"
        h={{ base: "30px", md: "80px" }}
        bgColor="#1D1D1D"
        alignItems="center"
        p={{ base: " 25px", md: "0px 20px ", lg: "0px 180px" }}
        overflowX="ishidden"
        justifyContent="space-between"
      >
        {" "}
        <Flex>
          <Heading
            className="zoom"
            color="#0AF"
            fontSize="32px"
            fontWeight="800"
          >
            AR
          </Heading>
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }}>
          <HamburgerIcon
            color="#0AF"
            finalFocusRef={btnRef}
            boxSize="10"
            onClick={onOpen}
          />

          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Items</DrawerHeader>
              <DrawerBody>
                {" "}
                <Flex gap="20px" direction="column">
                  <Link href="/">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Home
                    </Text>
                  </Link>
                  <Link href="#about">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      About
                    </Text>
                  </Link>
                  <Link href="#experience">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Experience
                    </Text>
                  </Link>
                  <Link href="#portfolio">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Portfolio
                    </Text>
                  </Link>
                  <Link href="#Service">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Service
                    </Text>
                  </Link>
                  <Link href="#contact">
                    <Text
                      _hover={{ color: "#0AF" }}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      Contact
                    </Text>
                  </Link>
                </Flex>
              </DrawerBody>
              <DrawerFooter>
                <Flex gap="30px">
                  <Link href="https://www.facebook.com/profile.php?id=100008928465845">
                    <Image src={fb} alt="fb " />
                  </Link>
                  <Link href="https://www.instagram.com/mr.rehman_xyz/">
                    <Image src={twitter} alt="Instagram " />
                  </Link>
                  <Link href="https://www.linkedin.com/in/abdul-rehman-a27a1719a/">
                    <Image src={linkedin} alt="linkedin " />
                  </Link>
                </Flex>
              </DrawerFooter>
              ``
            </DrawerContent>
          </Drawer>
        </Flex>
        <Flex gap="20px" display={{ base: "none", lg: "flex" }}>
          <Link href="#home">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              Home
            </Text>
          </Link>
          <Link href="#about">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              About
            </Text>
          </Link>
          <Link href="#experience">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              Experience
            </Text>
          </Link>
          <Link href="#portfolio">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              Portfolio
            </Text>
          </Link>
          <Link href="#Service">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              Service
            </Text>
          </Link>
          <Link href="#contact">
            <Text
              className="zoom"
              color="white"
              _hover={{ color: "#0AF" }}
              fontSize="16px"
              fontWeight="400"
            >
              Contact
            </Text>
          </Link>
        </Flex>
        <Flex gap="20px" display={{ base: "none", lg: "flex" }}>
          <Link href="https://www.facebook.com/profile.php?id=100008928465845">
            <Image src={fb} alt="fb " />
          </Link>
          <Link href="https://www.instagram.com/mr.rehman_xyz/">
            <Image src={twitter} alt="Instagram " />
          </Link>
          <Link href="https://www.linkedin.com/in/abdul-rehman-a27a1719a/">
            <Image src={linkedin} alt="linkedin " />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
