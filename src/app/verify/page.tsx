import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div
        className="md:w-[500px] mx-auto rounded-lg"
        style={{
          boxShadow: "0 20px 40px rgba(61, 65, 84, 0.15)",
          backgroundColor: "#fff",
          padding: "48px 60px",
        }}
      >
        <Image
          src="/logo.png"
          alt="SMC logo"
          className="mx-auto"
          width={120}
          height={120}
        />
        <h1 className="font-bold text-2xl text-center mb-8">SMC DAO</h1>{" "}
        <div id="contact-form" className="contact-form mt-30 mb-30">
          <span className="text-center block mb-4 bg-green-600 text-white p-2">
            Verify OTP sent to your email address
          </span>

          <div className="form-group flex items-center gap-2 mb-8">
            <label htmlFor="code" hidden>
              OTP
            </label>

            <input
              type="text"
              id="code"
              name=""
              placeholder="Confirm OTP"
              className="w-full h-[52px] bg-[#eee] px-5 outline-0"
            />
          </div>

          <Link
            href="/home"
            className="block bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
