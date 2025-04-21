import React from "react";
import { FaEthereum } from "react-icons/fa";

// Dummy data for UI testing
const dummyData = [
  {
    addressTo: "0xReceiverAddress123",
    addressFrom: "0xSenderAddress456",
    timestamp: "20 April, 2025, 4:20 PM",
    message: "Enjoy your crypto!",
    keyword: "ethereum",
    amount: "0.5",
    url: "https://placekitten.com/400/300",
  },
  {
    addressTo: "0xReceiverAddress789",
    addressFrom: "0xSenderAddress012",
    timestamp: "19 April, 2025, 3:15 PM",
    message: "Payment for services",
    keyword: "blockchain",
    amount: "2.1",
    url: "https://placekitten.com/401/301",
  },
];

// Utility to shorten address for display
const shortenAddress = (address) => `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;

// Single transaction card
const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, amount, url }) => {
  return (
    <div className="bg-[#181918] m-4 flex flex-1 
      2xl:min-w-[450px] 2xl:max-w-[500px] 
      sm:min-w-[270px] sm:max-w-[300px] 
      min-w-full flex-col p-4 rounded-lg hover:shadow-xl transition">
      
      <div className="flex flex-col w-full mb-4">
        <p className="text-white text-sm">From: {shortenAddress(addressFrom)}</p>
        <p className="text-white text-sm">To: {shortenAddress(addressTo)}</p>
        <p className="text-white text-sm">Amount: {amount} ETH</p>
        {message && <p className="text-white text-sm mt-2">Message: {message}</p>}
      </div>

      <img
        src={url}
        alt="transaction visual"
        className="w-full h-60 rounded-lg object-cover mb-4 shadow-md"
      />

      <div className="flex justify-center items-center gap-2 bg-black p-2 rounded-2xl w-max mx-auto">
        <FaEthereum className="text-[#37c7da]" />
        <p className="text-[#37c7da] text-xs">{timestamp}</p>
      </div>
    </div>
  );
};

// Transactions Page
const Transactions = () => {
  const currentAccount = true; // Dummy true for now

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 to-black py-12 px-4">
      <div className="flex flex-col w-full max-w-7xl">

        <h3 className="text-white text-4xl text-center mb-10 font-bold">
          {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {dummyData.map((transaction, index) => (
            <TransactionsCard key={index} {...transaction} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Transactions;
