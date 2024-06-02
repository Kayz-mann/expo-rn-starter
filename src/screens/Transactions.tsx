import { StyleSheet, View, RefreshControl } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import StackHeader from "../components/StackHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TransactionList, {
  TransactionProps,
} from "../components/TransactionList";
import { Box } from "../components/Theme";

type RouteParams = {
  transactions: TransactionProps[];
  walletAddress: string;
};

const Transactions = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { transactions, walletAddress }: RouteParams | any = route.params || {};

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Perform the refresh action here, such as refetching data
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <StackHeader title="Transactions" onBackPress={goBack} />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Box>
          <TransactionList
            transactions={transactions}
            walletAddress={walletAddress}
          />
        </Box>
      </ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(2),
  },
  content: {
    width: wp(90),
    paddingBottom: 100,
  },
});
