import { Action, IAgentRuntime, Memory, State } from '@ai16z/eliza';
export const fetchPriceAction: Action = {
  name: 'FETCH_PRICE',
  similes: ['get token price', 'check price', 'token value', 'price check', 'get price in usd'],
  description: 'Fetch the current price of a Solana token in USDC using Jupiter API',
  examples: [
    [
      {
        user: '{{user1}}',
        content: {
          text: 'Get the current price of SOL token in USDC',
        },
      },
    ],
  ],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    console.log('🚀 ~ validate: ~ validate:');

    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
    console.log('🚀 ~ handler: ~ handler:');

    return true;
  },
};
