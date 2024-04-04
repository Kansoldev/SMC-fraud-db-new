'use client'
import Image from "next/image";
import Link from "next/link";
import {SyntheticEvent, useState, useRef, FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {login} from "@/src/api/auth";
import {post} from "@/src/api/fetch";
import {useCookies} from "next-client-cookies";

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

    const cookie = useCookies()

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
        setEmailError(null);

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

                const res = await post(formData, 'login')

                console.log(res)
                console.log(res.status)
                if (res.status === 200) {
                    cookie.set('loginEmail', email)
                    router.push('/verify');
                }
                else if (res.status === 403) {
                    setEmailError(res.message);
                    emailRef.current?.focus();
                }
                else {
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
                        {error && (
                            <div className="mb-3" role="alert">{error}</div>
                        )}

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
                                aria-describedby="email-feedback"
                            />
                            {
                                emailError && (
                                    <div className="" id="email-feedback">
                                        {emailError}
                                    </div>
                                )
                            }

                        </div>

                        <button type="submit"
                            // href="/verify"
                            className="block bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg text-center"
                        >
                            Continue {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;