import { Text, Box, Center, ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderCard from "./OrderCard";

function OrderPendingTab({ orders, navigation }) {
  const [filteredOrders, setFilteredOrders] = useState();

  const filterOrders = (e) => {
    if (orders) {
      let filtereddata = orders.filter((order) => {
        return order.status == "pending";
      });
      setFilteredOrders(filtereddata);
    }
  };

  useEffect(() => {
    filterOrders();
  }, [orders]);

  return (
    <Center flex="1" bg="#EBEBEB" justifyContent="center" alignItems="center">
      {!filteredOrders && (
        <Box alignItems="center">
          <MaterialCommunityIcons
            name="mailbox-open-up"
            size={24}
            color="#A0A0A0"
          />
          <Text color="#A0A0A0">No orders are currently available</Text>
        </Box>
      )}
      {filteredOrders && (
        <ScrollView flex="1" w="100%">
          {filteredOrders.map((order) => {
            return (
              <OrderCard
                key={order.order_id}
                order={order}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      )}
    </Center>
  );
}

export default OrderPendingTab;
