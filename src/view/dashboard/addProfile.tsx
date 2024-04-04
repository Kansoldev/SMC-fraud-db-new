'use client'
import Image from "next/image";
import Link from "next/link";
import {FormEvent, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {post} from "@/src/api/fetch";


const AddProfile = () => {

    const [step, setStep] = useState(1);

    function handlePrev() {
        setStep((prevStep) => prevStep - 1);
    }

    function handleNext() {
        setStep((prevStep) => prevStep + 1);
    }

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
            console.log(formData.get("phone"))
            console.log(email)

            if (isValidated) {
                setIsLoading(true);

                const res = await post(formData, 'user/new-profile')

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
        <section>
            <div className="container">
                <div className="w-8/12 mx-auto mt-10">
                    <Link href="#" onClick={() => router.back()} className="block mb-5 text-lg underline">
                        &laquo; Back
                    </Link>

                    <form
                        className="contact-form mt-30 mb-30"
                        id="contact-form"
                        onSubmit={onSubmit}
                    >
                        <div className="contact">

                                <div hidden={step !== 1}>
                                    <h3 className="font-bold mb-3 text-lg">
                                        General Information
                                    </h3>

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
                                                <label htmlFor="sex">Gender</label>

                                                <select name="gender" id="" className="form-control">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="dob">Date of Birth</label>

                                                <input
                                                    type="date"
                                                    name="dob"
                                                    id="dob"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone number</label>

                                                <input
                                                    type="text"
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

                                    <button
                                        type="button"
                                        className="btn-cta"
                                        onClick={handleNext}
                                    >
                                        Continue
                                    </button>
                                </div>

                                <div hidden={step !== 2}>
                                    <button onClick={handlePrev} className="block mb-5">
                                        &laquo; Previous
                                    </button>

                                    <h3 className="font-bold mb-3 text-lg">Social Media</h3>

                                    <div className="row row-30">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="facebook">Facebook</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="facebook"
                                                    id="facebook"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="twitter">Twitter</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="twitter"
                                                    id="twitter"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="telegram">telegram</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="telegram"
                                                    id="telegram"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="discord">Discord</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="discord"
                                                    id="discord"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="instagram">Instagram</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="instagram"
                                                    id="instagram"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
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
                                    </div>

                                    <button className="btn-cta"
                                            type="submit"
                                    >
                                        Submit {isLoading && (<i className="fa-duotone fa-loader fa-spin"></i>)}
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );

}

export default AddProfile;