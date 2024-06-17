import WalletForm from "@/src/view/dashboard/forms/addWallet";
import AddImagesForm from "@/src/view/dashboard/forms/addImages";

function FormModal({
  isOpen,
  onClose,
  currentBtn,
}: {
  isOpen: Boolean;
  currentBtn: { current: string | null };
  onClose: () => void;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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

        <form onSubmit={handleSubmit}>
          {currentBtn.current == "Add a new wallet" && <WalletForm />}
          {currentBtn.current == "Add Images" && <AddImagesForm />}
        </form>
      </div>
    </div>
  );
}

export default FormModal;
