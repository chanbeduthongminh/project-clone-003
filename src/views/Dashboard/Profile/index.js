// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../../../assets/img/ProfileBackground.png";
import React, { useEffect } from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";
import { useState } from "react";
import axios from "axios";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // Lấy thông tin người dùng
  //   // const getUserInfo = (event) => {
  //   // event.preventDefault();

  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_BACKEND_API}/api/users/user-information`,
  //     config
  //   );
  //   setTitle(data.result.title);
  //   setDescription(data.result.description);
  //   setName(data.result.name);
  //   setMobile(data.result.mobile);
  //   setEmail(data.result.email);
  //   setLocation(data.result.location);
  //   // axios
  //   //   .get(
  //   //     `${process.env.REACT_APP_BACKEND_API}/api/users/user-information`,
  //   //     config
  //   //   )
  //   //   .then((response) => {
  //   //     const data = response.data;
  //   //     if (data.status === 1) {
  //   //       setTitle(data.result.title);
  //   //       setDescription(data.result.description);
  //   //       setName(data.result.name);
  //   //       setMobile(data.result.mobile);
  //   //       setEmail(data.result.email);
  //   //       setLocation(data.result.location);
  //   //       console.log("kokokokok");
  //   //     } else {
  //   //       alert(response.data.message);
  //   //     }
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //     alert("An error occurred while signing innn");
  //   //   });
  //   // };
  // }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/api/users/user-information`,
          config
        );
        const data = response.data;
        if (data.status === 1) {
          setTitle(data.result.title);
          setDescription(data.result.description);
          setName(data.result.name);
          setMobile(data.result.mobile);
          setEmail(data.result.email);
          setLocation(data.result.location);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
        // alert("An error occurred while signing in");
      }
    };
    getUserInfo();
  }, []);
  const userName = localStorage.getItem("username");
  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        // name={"Esthera Jackson"}
        name={userName}
        email={email}
        tabs={[
          {
            name: "TỔNG QUAN",
            icon: <FaCube w="100%" h="100%" />,
          },
          {
            name: "NHÓM",
            icon: <IoDocumentsSharp w="100%" h="100%" />,
          },
          {
            name: "DỰ ÁN",
            icon: <FaPenFancy w="100%" h="100%" />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        {/* <PlatformSettings
          title={"Platform Settings"}
          subtitle1={"ACCOUNT"}
          subtitle2={"APPLICATION"}
        /> */}
        <ProfileInformation
          // title={"Profile Information"}
          // description={
          //   "Hi, I’m moimoi, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          // }
          // name={"Esthera Jackson"}
          // mobile={"(44) 123 1234 123"}
          // email={"esthera@simmmple.com"}
          // location={"United States"}
          title={"Thông tin cá nhân"}
          description={description}
          name={name}
          mobile={mobile}
          email={email}
          location={location}
        />
        {/* <Conversations title={"Conversations"} /> */}
      </Grid>
      {/* <Projects title={"Projects"} description={"Architects design houses"} /> */}
    </Flex>
  );
}

export default Profile;
