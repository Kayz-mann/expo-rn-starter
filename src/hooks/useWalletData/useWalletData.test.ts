import { renderHook, act } from '@testing-library/react-hooks';
import {describe, expect, test} from '@jest/globals'

import { Connection, PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { useWalletData } from './useWalletData';

jest.mock('@solana/web3.js', () => ({
  Connection: jest.fn(),
  PublicKey: jest.fn(),
}));

jest.mock('axios');

describe('useWalletData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches wallet data successfully', async () => {
    const mockGetBalance = jest.fn().mockResolvedValue(100000000);
    const mockGetConfirmedSignaturesForAddress2 = jest.fn().mockResolvedValue([
      { signature: 'tx1', slot: 1, sender: 'sender1' },
    ]);

    (Connection as jest.Mock).mockImplementation(() => ({
      getBalance: mockGetBalance,
      getConfirmedSignaturesForAddress2: mockGetConfirmedSignaturesForAddress2,
    }));

    const { result, waitForNextUpdate } = renderHook(() => useWalletData());

    act(() => {
      result.current.getWalletData('9QgXqrgdbVU8KcpfskqJpAXKzbaYQJecgMAruSWoXDkM');
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.balance).toBe(0.1); // Converted from lamports to SOL
    expect(result.current.transactions).toEqual([
      { signature: 'tx1', slot: 1, sender: 'sender1' },
    ]);
    expect(result.current.error).toBe(null);
  });

  it('handles errors correctly', async () => {
    const mockGetBalance = jest.fn().mockRejectedValue(new Error('Failed to fetch balance'));
    (Connection as jest.Mock).mockImplementation(() => ({
      getBalance: mockGetBalance,
    }));

    const { result, waitForNextUpdate } = renderHook(() => useWalletData());

    act(() => {
      result.current.getWalletData('invalid-address');
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.balance).toBe(null);
    expect(result.current.transactions).toEqual([]);
    expect(result.current.error).toBe('An unexpected error occurred');
  });

  it('handles axios network errors correctly', async () => {
    const mockGetBalance = jest.fn().mockRejectedValue({
      isAxiosError: true,
      request: {},
    });

    (Connection as jest.Mock).mockImplementation(() => ({
      getBalance: mockGetBalance,
    }));

    const { result, waitForNextUpdate } = renderHook(() => useWalletData());

    act(() => {
      result.current.getWalletData('invalid-address');
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.balance).toBe(null);
    expect(result.current.transactions).toEqual([]);
    expect(result.current.error).toBe('Network Error: No response received');
  });
});
