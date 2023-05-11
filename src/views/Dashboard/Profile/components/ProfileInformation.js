// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfileInformation = ({
  title,
  description,
  name,
  mobile,
  email,
  location,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
      <CardHeader p="12px 5px" mb="12px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          {title}
        </Text>
      </CardHeader>
      <CardBody px="5px">
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
            {description}
          </Text>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Tên đầy đủ:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {name}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Số điện thoại:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {mobile}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Email:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {email}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Quốc tịch:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {location}
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
              Liên hệ :{" "}
            </Text>
            <Flex>
              <Link
                // href='#'
                color="teal.300"
                fontSize="lg"
                me="10px"
                _hover={{ color: "teal.300" }}
              >
                <Icon as={FaFacebook} />
              </Link>
              <Link
                // href='#'
                color="teal.300"
                fontSize="lg"
                me="10px"
                _hover={{ color: "teal.300" }}
              >
                <Icon as={FaInstagram} />
              </Link>
              <Link
                // href='#'
                color="teal.300"
                fontSize="lg"
                me="10px"
                _hover={{ color: "teal.300" }}
              >
                <Icon as={FaTwitter} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
      <Button
        bg="teal.300"
        color="white"
        _hover={{ bg: "teal.500" }}
        _active={{ bg: "teal.700" }}
        _focus={{ outline: "none" }}
        mt="24px"
        mx="auto"
        width={{ base: "100%", sm: "200px" }}
      >
        Thay đổi thông tin
      </Button>
    </Card>
  );
};

export default ProfileInformation;
