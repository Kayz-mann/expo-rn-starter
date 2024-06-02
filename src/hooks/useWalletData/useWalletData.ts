import { useState, useCallback } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import axios from "axios";


export const useWalletData = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWalletData = useCallback(async (walletAddress: string) => {


    try {
      setError(null);
      setIsLoading(true);
      const connection = new Connection(
        "https://api.mainnet-beta.solana.com",
        "confirmed"
      );

      // Fetch balance
      const publicKey = new PublicKey(walletAddress);
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / 1e9); // Convert lamports to SOL

      // Fetch last 10 transactions
      const transactionResponse =
        await connection.getConfirmedSignaturesForAddress2(publicKey, {
          limit: 10,
        });
      setTransactions(transactionResponse);
    } catch (e: any) {
      console.error("Error fetching wallet data:", e);
      if (axios.isAxiosError(e)) {
        if (e.response) {
          setError(`Server Error: ${e.response.status}`);
        } else if (e.request) {
          setError("Network Error: No response received");
        } else {
          setError(`Error: ${e.message}`);
        }
      } else if (e instanceof TypeError) {
        setError("Invalid address format or network error");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { balance, transactions, isLoading, error, getWalletData };
};
