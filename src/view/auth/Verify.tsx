'use client'
import Image from "next/image";
import Link from "next/link";
import {SyntheticEvent, useState, useRef, FormEvent, useEffect} from 'react';
import {useRouter} from "next/navigation";
import {login} from "@/src/api/auth";
import {post} from "@/src/api/fetch";
import {useCookies} from "next-client-cookies";

const Verify = () => {

    const router = useRouter();
    const codeRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string | null>(null);
    const [codeError, setCodeError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const cookie = useCookies()

    console.log(cookie.get('loginEmail'))

    useEffect(() => {
        if(!cookie.get('loginEmail')) {
            router.push('/')
        }
    }, [cookie, router]);
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
        setCodeError(null);

        try {
            event.preventDefault(); // Prevent default form submission
            const formData = new FormData(event.currentTarget);
            formData.set('email', cookie.get('loginEmail') as string)
            let isValidated = true;

            const email = formData.get("email") as string;
            console.log(email)

            if (!email.trim()) {
                isValidated = false;
                setCodeError('You must an OTP.');
                codeRef.current?.focus();
            }

            if (codeError) {
                return;
            }

            if (isValidated) {

                const res = await login(formData)

                console.log(res)
                console.log(res.status)
                if (res.status === 200) {
                    router.push('/');
                }
                else if (res.status === 403) {
                    setCodeError(res.message);
                    codeRef.current?.focus();
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
                <form onSubmit={onSubmit} noValidate={true}>
                    <>
                        {error && (
                            <div className="mb-3" role="alert">{error}</div>
                        )}
                    <div id="contact-form" className="contact-form mt-30 mb-30">
                        <span className="text-center block mb-4 bg-green-600 text-white p-2">
                            Verify OTP sent to your email address
                        </span>

                        <div className="form-group items-center gap-2 mb-8">
                            <label htmlFor="code" hidden>
                                OTP
                            </label>

                            <input
                                type="text"
                                id="code"
                                name="code"
                                ref={codeRef}
                                placeholder="Confirm OTP"
                                className="w-full h-[52px] bg-[#eee] px-5 outline-0"
                            />
                            {
                                codeError && (
                                    <div className="mt-2" id="email-feedback">
                                        {codeError}
                                    </div>
                                )
                            }
                        </div>

                            <button
                                type="submit"
                                // href="/home"
                                className="block bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg text-center"
                            >
                                Login {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
                            </button>
                        </div>
                    </>
                </form>
            </div>
        </div>
    );
}

export default Verify;