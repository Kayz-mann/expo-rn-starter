export const Connection = jest.fn().mockImplementation(() => ({
    getBalance: jest.fn().mockResolvedValue(100),
    getConfirmedSignaturesForAddress2: jest.fn().mockResolvedValue([{ signature: 'tx1', slot: 1, sender: 'sender1' }])
  }));
  
  export const PublicKey = jest.fn();