const WalletForm = () => {
  return (
    <>
      <div>
        <label htmlFor="wallet-type">Select Wallet</label>

        <select
          name="type"
          id="wallet-type"
          className="block border border-solid w-full p-2"
        >
          <option value="DEX">DEX</option>
          <option value="CEX">CEX</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="wallet">Wallet address</label>
        <input
          type="text"
          name="wallet"
          id="wallet"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="tokens">Tokens bought</label>
        <input
          type="text"
          name="tokens"
          id="tokens"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
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
    </>
  );
};

export default WalletForm;
