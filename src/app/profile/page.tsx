"use client";

import Link from "next/link";
import TabList from "@/components/TabList/";

export default function Page() {
  const tabsData = [
    {
      title: "Social Media",
      content: (
        <>
          <p className="text-gray-500">
            Facebook: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Discord: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Instagram: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Telegram: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Twitter: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Whatsapp: <span className="text-black ml-3"></span>
          </p>
        </>
      ),
    },
    {
      title: "Wallet Information",
      content: (
        <>
          <div>
            <div className="flex flex-col justify-center shadow-lg p-6 rounded-lg">
              <p className="text-gray-500">
                Wallet no: <span className="text-black ml-3">1</span>
              </p>

              <p className="text-gray-500 mt-3">
                Created on:{" "}
                <span className="text-black ml-3">4th February 2024</span>
              </p>

              <p className="text-gray-500 mt-3">
                Wallet Type: <span className="text-black ml-3">CEX</span>
              </p>

              <p className="text-gray-500 mt-3">
                CEX Type: <span className="text-black ml-3">Binance</span>
              </p>

              <p className="text-gray-500 mt-3">
                Wallet Address:{" "}
                <span className="text-black ml-3">ad1967290x</span>
              </p>

              <p className="text-gray-500 mt-3">
                Token bought:{" "}
                <span className="text-black ml-3">
                  Shiba INU, Wikicat, Doge Coin, Solana
                </span>
              </p>

              <div className="flex gap-4 mt-7">
                <span className="bg-red-800 text-white text-[12px] px-3 py-2 rounded-full font-semibold">
                  Suspicious wallet
                </span>

                <span className="bg-blue-800 text-white text-[12px] px-3 py-2 rounded-full font-semibold">
                  Developer wallet
                </span>

                <span className="bg-sky-300 text-white text-[12px] px-3 py-2 rounded-full font-semibold">
                  Airdrop wallet
                </span>

                <button className="bg-white text-black text-[12px] px-3 py-2 rounded-full font-semibold">
                  Add new tag +
                </button>
              </div>
            </div>

            <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 mt-8 border-[1px] border-black">
              Add new wallet
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Images",
      content: (
        <>
          <div className="flex gap-7">
            <div className="flex flex-col shadow-lg p-3 rounded-lg">
              <img src="/user.jpg" className="mb-5" alt="" />

              <p className="text-gray-500">
                Date: <span className="text-black ml-3">24th Dec 2020</span>
              </p>

              <p className="text-gray-500 mt-3">
                Time: <span className="text-black ml-3">6:15AM</span>
              </p>

              <p className="text-gray-500 mt-3">
                Notes:{" "}
                <span className="text-black">
                  This picture is a screenshot from her conversation in the
                  telegram group
                </span>
              </p>

              <div className="flex gap-7">
                <button className="bg-black text-white transition-all duration-100 font-semibold text-[16px] px-6 py-3 w- mt-5">
                  Edit
                </button>

                <button className="bg-red-700 text-white transition-all duration-100 font-semibold text-[16px] px-6 py-3 w- mt-5">
                  Delete
                </button>
              </div>
            </div>

            <div className="flex flex-col shadow-lg p-3 rounded-lg">
              <img src="/user.jpg" className="mb-5" alt="" />

              <p className="text-gray-500">
                Date: <span className="text-black ml-3">24th Dec 2020</span>
              </p>

              <p className="text-gray-500 mt-3">
                Time: <span className="text-black ml-3">6:15AM</span>
              </p>

              <p className="text-gray-500 mt-3">
                Notes:{" "}
                <span className="text-black ml-3">
                  This picture was taken on whatsapp on the 14th Feb 2024
                </span>
              </p>
            </div>

            <div className="flex flex-col shadow-lg p-3 rounded-lg">
              <img src="/user.jpg" className="mb-5" alt="" />

              <p className="text-gray-500">
                Date: <span className="text-black ml-3">24th Dec 2020</span>
              </p>

              <p className="text-gray-500 mt-3">
                Time: <span className="text-black ml-3">6:15AM</span>
              </p>

              <p className="text-gray-500 mt-3">
                Notes:{" "}
                <span className="text-black ml-3">
                  This picture was taken on whatsapp on the 14th Feb 2024
                </span>
              </p>
            </div>
          </div>

          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-[16px] px-6 py-3 mt-5 border-[1px] border-black">
            Add Images
          </button>
        </>
      ),
    },
    {
      title: "Audio",
      content: <></>,
    },
    {
      title: "Links",
      content: <></>,
    },
    {
      title: "Reports",
      content: (
        <>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center shadow-lg p-6 rounded-lg">
              <div className="flex w-full items-center justify-between gap-3 mb-5">
                <h2 className="font-bold">
                  Feb 13<sup>th</sup> 2024
                </h2>

                <span className="bg-red-700 text-white text-[12px] px-[7px] py-[4px] rounded-full font-semibold">
                  High Severity
                </span>
              </div>

              <p>
                This person is a serial rugger, he has created 4 projects in the
                last 2 weeks
              </p>

              <button className="mt-5 flex items-center justify-center gap-1 bg-black text-white w-full p-3 text-center">
                View more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center shadow-lg p-9 rounded-lg">
              <div className="flex w-full items-center justify-between gap-3 mb-5">
                <h2 className="font-bold">
                  Mar 19<sup>th</sup> 2024
                </h2>

                <span className="bg-yellow-500 text-black text-[12px] px-[7px] py-[4px] rounded-full font-semibold">
                  Medium Severity
                </span>
              </div>

              <p>
                This person is a serial rugger, he has created 4 projects in the
                last 2 weeks
              </p>

              <button className="mt-7 flex items-center justify-center gap-1 bg-black text-white w-full p-3 text-center">
                View more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center shadow-lg p-9 rounded-lg">
              <div className="flex w-full items-center justify-between gap-3 mb-5">
                <h2 className="font-bold">
                  Dec 24<sup>th</sup> 2024
                </h2>

                <span className="bg-blue-800 text-white text-[12px] px-[7px] py-[4px] rounded-full font-semibold">
                  Low Severity
                </span>
              </div>

              <p>
                This person is a serial rugger, he has created 4 projects in the
                last 2 weeks
              </p>

              <button className="mt-7 flex items-center justify-center gap-1 bg-black text-white w-full p-3 text-center">
                View more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                </svg>
              </button>
            </div>
          </div>

          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-6 py-3 mt-10 border-[1px] border-black">
            Add a new report
          </button>
        </>
      ),
    },
    {
      title: "Related Profiles",
      content: (
        <>
          <div className="flex gap-7">
            <div className="flex flex-col shadow-lg p-3 rounded-lg">
              <img
                src="/user.jpg"
                className="mb-5 w-[300px] h-[300px] object-cover"
                alt=""
              />

              <div
                className="flex items-center justify-between related-profile-info mb-4"
                style={{
                  borderBottom: "1px solid #0000005c",
                  paddingBottom: 15,
                }}
              >
                <h2>Name: Tanner</h2>{" "}
              </div>

              <div
                className="flex items-center justify-between related-profile-info mb-4"
                style={{
                  borderBottom: "1px solid #0000005c",
                  paddingBottom: 15,
                }}
              >
                <h2>Wallet address: 0x12345</h2>{" "}
              </div>

              <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-base px-6 py-3 mt-5 border-[1px] border-black">
                View more
              </button>

              {/* <div className="flex flex-col gap-6">
                    <Link href="/" className="text-blue-500 underline">
                      General
                    </Link>
                    <Link href="/" className="text-blue-500 underline">
                      Wallet Information
                    </Link>
                    <Link href="/" className="text-blue-500 underline">
                      Social Media
                    </Link>
                    <Link href="/" className="text-blue-500 underline">
                      Images
                    </Link> 
                    <Link href="/" className="text-blue-500 underline">
                      Audio
                    </Link>
                    <Link href="/" className="text-blue-500 underline">
                      Links
                    </Link>
                    <Link href="/" className="text-blue-500 underline">
                      Reports
                    </Link>
                  </div> */}
            </div>
          </div>

          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-6 py-3 mt-10 border-[1px] border-black">
            Add new related profile
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[1000px] mx-auto">
        <Link href="/home" className="block mb-5 text-lg underline">
          &laquo; Back
        </Link>

        <div className="bg-white shadow-lg rounded-md">
          <div className="flex items-center justify-between gap-10 p-5">
            <div className="profile-img">
              <img
                src="/profile-agent.jpg"
                className="object-cover rounded-full"
                alt=""
              />
            </div>

            <div
              className="flex flex-col justify-center p-6 rounded-lg"
              style={{
                boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                border: "1px solid #e9ecef",
                borderRadius: "0.75rem",
              }}
            >
              <p className="text-gray-500">
                Full Name:{" "}
                <span className="text-black ml-3">Alyson Tanner</span>
              </p>

              <p className="text-gray-500 mt-3">
                Sex: <span className="text-black ml-3">001</span>
              </p>

              <p className="text-gray-500 mt-3">
                Date of birth:{" "}
                <span className="text-black ml-3">test@gmail.com</span>
              </p>

              <p className="text-gray-500 mt-3">
                Phone number:{" "}
                <span className="text-black ml-3">Alyson Tanner</span>
              </p>
            </div>

            <div
              className="flex flex-col justify-center p-6 rounded-lg"
              style={{
                boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                border: "1px solid #e9ecef",
                borderRadius: "0.75rem",
              }}
            >
              <p className="text-gray-500">
                Email address:{" "}
                <span className="text-black ml-3">Alyson Tanner</span>
              </p>

              <p className="text-gray-500 mt-3">
                Country: <span className="text-black ml-3">001</span>
              </p>

              <p className="text-gray-500 mt-3">
                State: <span className="text-black ml-3">test@gmail.com</span>
              </p>

              <p className="text-gray-500 mt-3">
                Profile created:{" "}
                <span className="text-black ml-3">test@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            <TabList tabsData={tabsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
