const NewReportForm = () => {
  return (
    <>
      <div>
        <label htmlFor="note">Note</label>
        <input
          type="text"
          name="note"
          id="note"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mt-8">
        <label htmlFor="severity">Select Severity Level</label>

        <select
          name="severity"
          id="severity"
          className="block border border-solid w-full p-2"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
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
