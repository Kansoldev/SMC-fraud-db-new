'use client'
import Image from "next/image";
import Link from "next/link";
import {SyntheticEvent, useState, useRef, FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {post} from "@/src/api/fetch";

const Register = () => {

    const router = useRouter();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [verifyAccount, setVerifyAccount] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
            console.log(email)

            if (isValidated) {
                setIsLoading(true);

                const res = await post(formData, 'register')

                console.log(res)
                console.log(res.status)
                if (res.status === 200) {
                    router.push('/');
                } else {
                    setError(res.message)
                }

            }

        } catch (error) {
            console.error('An error occurred during login:', error);
        } finally {
            setIsLoading(false);
        }
    };

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
                    <form onSubmit={onSubmit} noValidate={true}>
                        <>
                            {error && (
                                <div className="mb-3" role="alert">{error}</div>
                            )}
                            <div className="row row-30">
                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="fname">Full Name</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone number</label>

                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="country"
                                            id="country"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="state"
                                            id="state"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>

                        <button type="submit"
                            // href="/verify"
                                className="block bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg text-center"
                        >
                            Submit {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Register;