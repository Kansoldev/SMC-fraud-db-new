import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="container mt-10 mx-auto">
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
          <Link
            href="/"
            className="flex items-center w-max gap-2 bg-red-600 hover:bg-red-700 px-4 py-3 text-white font-semibold rounded-xl transition-all ease-in-out delay-150 ml-auto"
          >
            <svg version="1.1" viewBox="0 0 24 24" width={18} height={18}>
              <g id="info" />
              <g id="icons">
                <g id="exit2">
                  <path
                    d="M12,10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C10,9.1,10.9,10,12,10z"
                    fill="#fff"
                  />
                  <path
                    d="M19.1,4.9L19.1,4.9c-0.3-0.3-0.6-0.4-1.1-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.8,0.4,1.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0    c1.3,1.3,2,3,2,4.9c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-1.9,0.8-3.7,2.1-4.9l0,0C7.3,6.8,7.5,6.4,7.5,6c0-0.8-0.7-1.5-1.5-1.5    c-0.4,0-0.8,0.2-1.1,0.4l0,0C3.1,6.7,2,9.2,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,9.2,20.9,6.7,19.1,4.9z"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>{" "}
            Log out
          </Link>
        </div>
      </header>

      <main className="container mx-auto mt-5">
        <Image
          src="/logo.png"
          alt="SMC logo"
          className="mx-auto"
          width={120}
          height={120}
        />

        <h1 className="font-bold text-2xl mb-10 capitalize text-center ">
          SMC Intelligence
        </h1>

        <div className="search-container flex flex-col w-[800px] mx-auto">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search name, social media handle, wallet address, phone number etc"
            className="w-full p-4 border-0 outline-0 rounded-[30px] shadow-lg mx-4"
          />
        </div>

        <section>
          <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold">
                        Name
                      </th>

                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold">
                        Wallet Address
                      </th>

                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold">
                        Wallet Type
                      </th>

                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold">
                        Phone Number
                      </th>

                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold">
                        Email address
                      </th>

                      <th className="pt-4 pb-3 px-2 align-middle border border-solid uppercase text-sm font-semibold"></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="px-6 align-middle p-4">Oyinkansola</td>

                      <td className="px-6 align-middle p-4">ad1967290x</td>

                      <td className="px-6 align-center p-4">DEX</td>

                      <td className="px-6 align-middle p-4">+2348090231455</td>

                      <td className="px-6 align-middle p-4">
                        yahayaoyinkansola@gmail.com
                      </td>

                      <td className="px-6 align-middle p-4">
                        <Link
                          href="/profile"
                          className="bg-black hover:bg-neutral-800 px-6 py-3 text-white font-semibold rounded-xl transition-all ease-in-out delay-150"
                        >
                          View Full Profile
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Link
          href="/add"
          className="bg-white text-black px-6 py-3 mt-7 inline-block rounded-lg font-semibold ml-auto"
        >
          + Add New Profile
        </Link>
      </main>
    </>
  );
}
