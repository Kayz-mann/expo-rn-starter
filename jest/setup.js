import '@testing-library/jest-native/extend-expect'; // Adds custom jest matchers for asserting on DOM nodes.
import '@solana/web3.js'; // Ensure this import is present to use the mock

jest.mock('@solana/web3.js', () => ({
  Connection: jest.fn().mockImplementation(() => ({
    getBalance: jest.fn().mockResolvedValue(100),
    getConfirmedSignaturesForAddress2: jest.fn().mockResolvedValue([{ signature: 'tx1', slot: 1, sender: 'sender1' }])
  })),
  PublicKey: jest.fn()
}));