import {FormEvent, useState} from "react";
import {post} from "@/src/api/fetch";
import {useCookies} from "next-client-cookies";
import {useRouter} from "next/navigation";

// @ts-ignore
const WalletForm = ({ data }) => {
    const [wallet, setWallet] = useState("DEX");

    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [verifyAccount, setVerifyAccount] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const user = data
    console.log(user)
    const addWallet = async (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        setError(null);

        try {
            event.preventDefault(); // Prevent default form submission
            const formData = new FormData(event.currentTarget);
            let isValidated = true;

            formData.set("email", user.email);

            if (isValidated) {
                setIsLoading(true);

                const res = await post(formData, "user/add-wallet");

                console.log(res);
                console.log(res.status);
                if (res.status === 200) {
                    window.location.href = window.location.href
                } else {
                    setError(res.message);
                    window.scrollTo(0, 0);
                }
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <form onSubmit={addWallet}>
      <div>
        <label htmlFor="wallet-type">Select Wallet Type</label>

        <select
          name="type"
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
            name="wType"
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
        Add Wallet {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
      </button>
    </form>
  );
};

export default WalletForm;
