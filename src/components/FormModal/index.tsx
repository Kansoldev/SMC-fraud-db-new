import WalletForm from "@/src/view/dashboard/forms/addWallet";
import AddImagesForm from "@/src/view/dashboard/forms/addImages";
import AddAudioForm from "@/src/view/dashboard/forms/addAudio";
import AddLinksForm from "@/src/view/dashboard/forms/addLinks";
import NewReportForm from "@/src/view/dashboard/forms/addReport";
import RelatedProfileForm from "@/src/view/dashboard/forms/addRelatedProfile";

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
          {currentBtn.current == "Add Audio" && <AddAudioForm />}
          {currentBtn.current == "Add Links" && <AddLinksForm />}
          {currentBtn.current == "Add a new report" && <NewReportForm />}
          {currentBtn.current == "Add new related profile" && (
            <RelatedProfileForm />
          )}
        </form>
      </div>
    </div>
  );
}

export default FormModal;
