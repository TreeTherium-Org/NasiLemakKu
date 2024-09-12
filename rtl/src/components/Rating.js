import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'; // Use PhantomWalletAdapter
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import RestaurantList from './Review';

const Wallet = () => {
  const network = clusterApiUrl('devnet'); // Change to 'mainnet-beta' if deploying to mainnet
  const endpoint = network;

  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
         <RestaurantList />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Wallet;
