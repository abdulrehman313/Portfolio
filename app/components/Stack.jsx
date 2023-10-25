"use client";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./style.css";

const Stack = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml2");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);
  return (
    <Text
      fontSize={{ base: "18px", md: "26px", lg: "20px" }}
      fontWeight="400"
      className="ml2"
      color="#0AF"
      letterSpacing="1.8px"
    >
      Full Stack Software Developer
    </Text>
  );
};

export default Stack;
