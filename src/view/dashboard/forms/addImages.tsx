function ImageForm() {
  return (
    <form>
      <div className="mt-5">
        <input type="file" name="" id="" />
      </div>

      <div className="mt-5">
        <label htmlFor="note">Notes</label>
        <textarea
          name=""
          id="note"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 w-full mt-8"
      >
        Add Image
      </button>
    </form>
  );
}

export default ImageForm;
