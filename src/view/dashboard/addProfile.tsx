"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { post } from "@/src/api/fetch";

const AddProfile = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [verifyAccount, setVerifyAccount] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [wallet, setWallet] = useState("dex");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError(null);

    try {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(event.currentTarget);
      let isValidated = true;

      const email = formData.get("email") as string;
      console.log(formData.get("phone"));
      console.log(email);

      if (isValidated) {
        setIsLoading(true);

        const res = await post(formData, "user/new-profile");

        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          router.push("/");
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
    <section>
      <div className="container">
        <div className="w-8/12 mx-auto mt-10">
          <Link
            href="#"
            onClick={() => router.back()}
            className="block mb-5 text-lg underline"
          >
            &laquo; Back
          </Link>

          <form
            className="contact-form mt-30 mb-30"
            id="contact-form"
            onSubmit={onSubmit}
          >
            <div className="contact">
              {error && (
                <span className="text-red-500 block text-center mb-4 text-md font-bold">
                  {error}
                </span>
              )}

              <div className="container">
                <div className="form-group">
                  <label htmlFor="fname">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sex">Gender</label>

                  <select name="gender" id="" className="form-control">
                    <option value="male">
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dob">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="wallet-address">
                    Wallet address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="wallet-address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="wallet-type">Wallet Type</label>

                  <select
                    id="wallet-type"
                    className="form-control"
                    name="type"
                    onChange={(e) => setWallet(e.target.value)}
                  >
                    <option value="DEX">
                      DEX
                    </option>

                    <option value="CEX">CEX</option>
                  </select>
                </div>

                {wallet === "CEX" && (
                  <div className="form-group">
                    <label htmlFor="cex-type">CEX Type</label>

                    <select
                      name="wType"
                      id="cex-type"
                      className="form-control"
                    >
                      <option value="binance">Binance</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    id="country"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">
                    State <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    id="state"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="facebook">Facebook</label>

                  <input
                    type="text"
                    className="form-control"
                    name="facebook"
                    id="facebook"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="twitter">Twitter</label>

                  <input
                    type="text"
                    className="form-control"
                    name="twitter"
                    id="twitter"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telegram">telegram</label>

                  <input
                    type="text"
                    className="form-control"
                    name="telegram"
                    id="telegram"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="discord">Discord</label>

                  <input
                    type="text"
                    className="form-control"
                    name="discord"
                    id="discord"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="instagram">Instagram</label>

                  <input
                    type="text"
                    className="form-control"
                    name="instagram"
                    id="instagram"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">Whatsapp</label>

                  <input
                    type="text"
                    className="form-control"
                    name="whatsapp"
                    id="whatsapp"
                  />
                </div>
              </div>

              <button type="submit" className="btn-cta">
                Add User {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProfile;
