"use-client";
import { Button, Divider, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./styleimg.css";
import axios from "axios";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const BODY = {
      email: inputValue,
    };
    //   axios
    //     .post``, BODY)
    //     .then((res) => {
    //       if (res) setInputValue("");
    //     });
  };
  return (
    <>
      <Flex
        id="contact"
        bgColor="#000000 "
        alignItems="center"
        justifyContent="center"
        p="20px"
      >
        <Text fontSize="48px" fontWeight="700" lineHeight="48px " color="white">
          Contact
        </Text>
      </Flex>
      <Flex
        bgColor="#000000 "
        p={{ base: "10px 30px", md: "40px" }}
        justifyContent="center"
        alignItems="center"
        gap={{ base: "10px", lg: "176 " }}
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <Flex direction="column" p={{ base: "10px", md: "30px" }} gap="25px">
          <Input
            color="white"
            border="none"
            placeholder="Your Name"
            borderRadius="none"
          />
          <Divider />
          <Input
            color="white"
            border="none"
            placeholder="E-mail"
            borderRadius="none"
            type="email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Divider />
          <Input
            color="white"
            border="none"
            placeholder="Message"
            borderRadius="none"
          />
          <Divider />
          <Button borderRadius="48px" mt="40px" h="64px">
            Contact Us
          </Button>
        </Flex>
        <Flex>
          {" "}
          <Image className="zoom" src="/contact.svg" alt="Dan Abramov" />{" "}
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
