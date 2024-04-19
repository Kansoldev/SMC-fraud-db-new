"use client";
import Link from "next/link";
import TabList from "@/src/components/TabList/index";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { get, post } from "@/src/api/fetch";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  console.log(uid);

  async function process() {
    try {
      if (uid) {
        const formData = new FormData();
        formData.append("uid", uid as string);
        return await post(formData, "user/profile");
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }

  const result = useQuery({ queryKey: ["profile"], queryFn: process });

  console.log(result?.status);
  console.log(result?.data);

  const user = result?.data?.profile ?? null;
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
            <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
              Add a new wallet
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Images",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
            Add Images
          </button>
        </>
      ),
    },
    {
      title: "Audio",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
            Add Audio
          </button>
        </>
      ),
    },
    {
      title: "Links",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
            Add Links
          </button>
        </>
      ),
    },
    {
      title: "Reports",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
            Add a new report
          </button>
        </>
      ),
    },
    {
      title: "Related Profiles",
      content: (
        <>
          <button className="bg-white text-black hover:bg-black hover:text-white transition-all duration-100 font-semibold text-lg px-5 py-2 border-[1px] border-black">
            Add new related profile
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[1000px] mx-auto">
        <Link
          href="#"
          onClick={() => router.back()}
          className="block mb-5 text-lg underline"
        >
          &laquo; Back
        </Link>

        <div className="bg-white shadow-lg rounded-md">
          <div className="flex items-center justify-between gap-10 p-5">
            <div className="profile-img">
              <img
                src="/anonymous.png"
                className="object-cover rounded-full"
                alt=""
              />
            </div>

            <div
              className="flex flex-col grow justify-center p-6 rounded-lg"
              style={{
                boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                border: "1px solid #e9ecef",
                borderRadius: "0.75rem",
              }}
            >
              <p className="text-gray-500">
                Full Name: <span className="text-black ml-3">{user?.name}</span>
              </p>

              <p className="text-gray-500 mt-3">
                Sex: <span className="text-black ml-3">{user?.gender}</span>
              </p>

              <p className="text-gray-500 mt-3">
                Date of birth:{" "}
                <span className="text-black ml-3">
                  {new Date(user?.dob).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>

              <p className="text-gray-500 mt-3">
                Phone number:{" "}
                <span className="text-black ml-3">{user?.phone}</span>
              </p>
            </div>

            <div
              className="flex flex-col grow justify-center p-6 rounded-lg"
              style={{
                boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                border: "1px solid #e9ecef",
                borderRadius: "0.75rem",
              }}
            >
              <p className="text-gray-500">
                Email address:{" "}
                <span className="text-black ml-3">{user?.email}</span>
              </p>

              <p className="text-gray-500 mt-3">
                Country:{" "}
                <span className="text-black ml-3">{user?.country}</span>
              </p>

              <p className="text-gray-500 mt-3">
                State: <span className="text-black ml-3">{user?.state}</span>
              </p>

              <p className="text-gray-500 mt-3">
                Profile created:{" "}
                <span className="text-black ml-3">
                  {new Date(user?.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
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
