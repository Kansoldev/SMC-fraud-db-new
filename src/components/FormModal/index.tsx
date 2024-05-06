import WalletForm from "@/src/view/dashboard/forms/addWallet";
import ImageForm from "@/src/view/dashboard/forms/addImages";

function FormModal({
    user,
  isOpen,
  currentBtn,
  onClose,
}: {
  user: any;
  isOpen: Boolean;
  currentBtn: { current: string };
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <button
          onClick={onClose}
          className="text-white bg-black text-right px-2 mb-7 text-lg"
        >
          &times;
        </button>

        {currentBtn.current === "Add a new wallet" && <WalletForm data={user}/>}
        {currentBtn.current === "Add Images" && <ImageForm />}
      </div>
    </div>
  );
}

export default FormModal;
