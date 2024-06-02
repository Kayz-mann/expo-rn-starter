import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  RefreshControl,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useForm } from "react-hook-form";
import { navigate } from "react-navigation-helpers";
import { ScrollView } from "react-native-virtualized-view";

import { Box, Text } from "../components/Theme";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import TransactionList from "../components/TransactionList";
import { useWalletData } from "../hooks/useWalletData/useWalletData";
import { SCREENS, isValidPublicKey } from "../../shared/constants";
import BalanceCard from "../components/BalanceCard";

export default function App() {
  const {
    control,
    watch,
    setError: setInputCheck,
    clearErrors,
  } = useForm({
    defaultValues: { walletAddress: "" },
  });

  const walletAddress = watch("walletAddress");

  const { balance, transactions, isLoading, error, getWalletData } =
    useWalletData();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await getWalletData(walletAddress);
    setRefreshing(false);
  };

  const handlePress = () => {
    if (!isValidPublicKey(walletAddress)) {
      setInputCheck("walletAddress", {
        type: "manual",
        message: "Invalid wallet address",
      });
      console.error("Invalid wallet address:", walletAddress);
      return;
    } else {
      clearErrors("walletAddress");
      getWalletData(walletAddress);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="text6" textAlign="center">
        Wallet Viewer
      </Text>
      <Box mt="l">
        <FormInput
          control={control}
          name="walletAddress"
          height={hp(6)}
          type="input"
          placeholder="Enter Solana Address"
        />

        {error && <Text style={styles.error}>{error}</Text>}
      </Box>

      <Box mt="xxl" style={{ paddingBottom: 20 }}>
        <Button
          height={hp(5)}
          type="primary"
          label="View"
          onPress={handlePress}
        />
      </Box>

      {isLoading && (
        <Box style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Box>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {balance !== null && (
          <BalanceCard walletAddress={walletAddress} walletBalance={balance} />
        )}

        <Box style={styles.transaction}>
          {transactions && walletAddress && (
            <Box style={styles.flex}>
              <Text variant="text4" color="black" mb="s">
                Transactions History
              </Text>

              <Pressable
                onPress={() =>
                  navigate(SCREENS.Transactions, {
                    transactions,
                    walletAddress,
                  })
                }
              >
                <Text variant="text4" color="primary" mb="s">
                  {transactions.length > 3 && "View More"}
                </Text>
              </Pressable>
            </Box>
          )}
          <TransactionList
            transactions={transactions.slice(0, 3)}
            walletAddress={walletAddress}
          />
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    paddingTop: 70,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
  },
  loader: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  transaction: {
    marginTop: 30,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(90),
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
