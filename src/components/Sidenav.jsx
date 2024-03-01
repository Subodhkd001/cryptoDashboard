import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: RiArrowUpDownFill,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack boxShadow="lg" maxW={"16rem"} h={"100vh"} justify={"space-between"}>
      <Box>
        <Heading textAlign={"Center"} fontSize={"20px"} as={"h1"} pt={"56px"}>
          @DOSOMECODING
        </Heading>

  {/************* Dashboard and Transactions box *************/}
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              borderRadius={"10px"}
              py={"3"}
              px={"4"}
              mx={"3"}
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color={"#797E82"}
            >
              <Icon as={nav.icon} />
              <Text fontWeight={"medium"} fontSize={"14px"}>
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

  {/************* Support box *************/}
      <Box mt={"6"} mx={"3"} mb={"6"}>
        <HStack
          borderRadius={"10px"}
          py={"3"}
          px={"4"}
          mx={"3"}
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
          }}
          color={"#797E82"}
        >
          <Icon as={BiSupport} />
          <Text fontWeight={"medium"} fontSize={"14px"}>
            Support
          </Text>
        </HStack>
      </Box>

    </Stack>
  );
};

export default Sidenav;

// {/* we can use multiples of 4. example insted of 12px can use 3 or instead of 24px can use 6 */}
