import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import React from "react";
import theme, { Box, Text } from "./Theme";

export type TransactionProps = {
  signature: string;
  slot: number;
  sender: string;
  onPress?: () => void;
  walletAddress?: string;
};

const TransactionList = ({
  transactions,
  walletAddress,
}: {
  transactions?: TransactionProps[];
  walletAddress?: string;
}) => {
  const renderTransactionItem = ({ item }: { item: TransactionProps }) => (
    <TouchableOpacity onPress={item.onPress} style={styles.card}>
      <Box style={styles.flex}>
        <Text variant="text7" fontWeight="600" color="black">
          Signature:
        </Text>

        {item.sender === walletAddress ? (
          <Feather name="arrow-up-right" size={14} color="red" />
        ) : (
          <Feather name="arrow-down-left" size={14} color="green" />
        )}
      </Box>
      <Text variant="text7" fontWeight="600" color="black" mt="s">
        {item.signature}
      </Text>
      <Text variant="text7" mt="l">
        Slot: {item.slot}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.signature}
      renderItem={renderTransactionItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.border,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(85),
  },
});
