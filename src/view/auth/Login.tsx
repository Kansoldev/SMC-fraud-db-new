'use client'
import Image from "next/image";
import Link from "next/link";
import {SyntheticEvent, useState, useRef, FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {login} from "@/src/api/auth";

const Login = () => {

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
        setError(null);
        setLoginError(null);
        setVerifyAccount(null);

        try {
            event.preventDefault(); // Prevent default form submission
            const formData = new FormData(event.currentTarget);
            let isValidated = true;

            const email = formData.get("email") as string;
            console.log(email)

            if (!email.trim()) {
                isValidated = false;
                setEmailError('You must enter an email address.');
                emailRef.current?.focus();
            }
            else if (!validateEmail(email)) {
                isValidated = false;
                setEmailError('Invalid email address.');
                emailRef.current?.focus();
            }

            if (emailError) {
                return;
            }

            if (isValidated) {
                setIsLoading(true);

                const res = await login(formData);

                if (res.status === 401) {
                    setError('We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.');
                    emailRef.current?.focus();
                } else if (res.status === 403) {
                    if (res.code === 1) {
                        setEmailError(res.message);
                        emailRef.current?.focus();
                    }
                    if (res.code === 2) {
                        setPasswordError(res.message);
                        passwordRef.current?.focus();
                    }
                    if (res.code === 3) {
                        setVerifyAccount(res.message);
                    }
                    console.log(res);
                } else if (res.status === 404) {
                    setLoginError("An unknown error occurred, please try again.");
                } else if (res.status === 200) {
                    router.push('/dashboard');
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
                        <div className="form-group items-center gap-2 mb-8">
                            <label htmlFor="email" hidden>
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Johndoe@xyz.com"
                                className="w-full h-[52px] bg-[#eee] px-5 outline-0"
                                ref={emailRef}
                            />
                            {
                                emailError && (
                                    <div className="te">
                                        {emailError}
                                    </div>
                                )
                            }

                        </div>

                        <button type="submit"
                            // href="/verify"
                            className="block bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg text-center"
                        >
                            Continue
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;