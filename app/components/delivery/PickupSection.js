import { Box, Text, Pressable, Switch } from "native-base";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import GLOBAL from "../../global";
import apiClient from "../../api/client";
import Toast from "react-native-toast-message";

function PickupSection({ navigation, deliveryMode }) {
  const getETA = () => {
    let returnstr;
    if (deliveryMode.pickup_time) {
      returnstr =
        JSON.parse(deliveryMode.pickup_time).estimate.value +
        " " +
        JSON.parse(deliveryMode.pickup_time).estimate.type;
    } else {
      returnstr = "not set";
    }
    return returnstr;
  };

  return (
    <Pressable
      m="4"
      py="4"
      bg="#e7f0df"
      borderRadius="3"
      shadow="1"
      display="flex"
      flexDirection="row"
      _pressed={{ bg: "#DFE8D5" }}
      onPress={() =>
        navigation.navigate("PickupEdit", { deliveryMode: deliveryMode })
      }
    >
      <Box flex="1">
        <Box
          mx="4"
          mb="3"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Text fontSize="20" color="#3d4f21" fontWeight="bold" mr="3">
            Pickup
          </Text>
          <Feather name="shopping-bag" size={22} color="#607040" />
        </Box>
        <Box ml="3" mr="3">
          <Box
            w="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            height="10"
            p="2"
            bg="#fff"
            borderRadius="3"
            mb="1"
          >
            <Box flex="1">
              <Text fontWeight="500">estimated time</Text>
            </Box>
            <Box flex="1">
              <Text>{deliveryMode && getETA()}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box alignItem="center" justifyContent="center">
        <Entypo name="chevron-small-right" size={20} color="#afb7c5" />
      </Box>
    </Pressable>
  );
}

export default PickupSection;
