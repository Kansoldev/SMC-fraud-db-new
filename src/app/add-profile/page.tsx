"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [step, setStep] = useState(1);

  function handlePrev() {
    setStep((prevStep) => prevStep - 1);
  }

  function handleNext() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <section>
      <div className="container">
        <div className="w-8/12 mx-auto mt-10">
          <Link href="/home" className="block mb-5 text-lg underline">
            &laquo; Back
          </Link>

          <form
            action="#"
            method="post"
            className="contact-form mt-30 mb-30"
            id="contact-form"
          >
            <div className="contact">
              {step === 1 && (
                <>
                  <h3 className="font-bold mb-3 text-lg">
                    General Information
                  </h3>

                  <div className="row row-30">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="fname">Full Name</label>

                        <input
                          type="url"
                          className="form-control"
                          name="fname"
                          id="fname"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="sex">Gender</label>

                        <select name="sex" id="" className="form-control">
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
                          name=""
                          id="dob"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone number</label>

                        <input
                          type="tel"
                          className="form-control"
                          name=""
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
                          name=""
                          id="email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="country">Country</label>

                        <input
                          type="url"
                          className="form-control"
                          name=""
                          id="country"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="state">State</label>

                        <input
                          type="url"
                          className="form-control"
                          name=""
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
                </>
              )}

              {step === 2 && (
                <>
                  <button onClick={handlePrev} className="block mb-5">
                    &laquo; Previous
                  </button>

                  <h3 className="font-bold mb-3 text-lg">Social Media</h3>

                  <div className="row row-30">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>

                        <input
                          type="url"
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
                          type="url"
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
                          type="url"
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
                          type="url"
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
                          type="url"
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
                          type="url"
                          className="form-control"
                          name="whatsapp"
                          id="whatsapp"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="btn-cta">Add new profile</button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
