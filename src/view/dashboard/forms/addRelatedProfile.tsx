const NewReportForm = () => {
  return (
    <>
      <div className="mt-5">
        <input type="file" name="" id="" />
      </div>

      <div className="mt-7">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-7">
        <label htmlFor="waddress">Wallet Address</label>
        <input
          type="text"
          name="waddress"
          id="waddress"
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

export default NewReportForm;
