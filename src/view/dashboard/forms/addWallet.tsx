import { useState } from "react";

const WalletForm = () => {
  const [wallet, setWallet] = useState("DEX");

  return (
    <form>
      <div>
        <label htmlFor="wallet-type">Select Wallet Type</label>

        <select
          name=""
          id="wallet-type"
          className="block border border-solid w-full p-2"
          onChange={(e) => setWallet(e.target.value)}
        >
          <option value="DEX">DEX</option>
          <option value="CEX">CEX</option>
        </select>
      </div>

      {wallet == "CEX" && (
        <div className="mt-5">
          <label htmlFor="cex-type">Select CEX Type</label>

          <select
            name=""
            id="cex-type"
            className="block border border-solid w-full p-2"
          >
            <option value="binance">Binance</option>
          </select>
        </div>
      )}

      <div className="mt-5">
        <label htmlFor="wallet">Wallet address</label>
        <input
          type="text"
          name=""
          id="wallet"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="tokens">Tokens bought</label>
        <input
          type="text"
          name=""
          id="tokens"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name=""
          id="tags"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 w-full mt-8"
      >
        Add Wallet
      </button>
    </form>
  );
};

export default WalletForm;
