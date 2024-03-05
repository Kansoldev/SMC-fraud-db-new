import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="container">
        <div className="w-8/12 mx-auto mt-10">
          <Link href="/home" className="block mb-5 text-lg underline">
            &laquo; Back
          </Link>

          <div className="contact">
            <form
              action="#"
              method="post"
              className="contact-form mt-30 mb-30"
              id="contact-form"
            >
              <div className="row row-30">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name=""
                      id="name"
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
                    <label htmlFor="wallet">Wallet Address</label>

                    <input
                      type="text"
                      className="form-control"
                      name=""
                      id="wallet"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone no</label>

                    <input
                      type="tel"
                      className="form-control"
                      name=""
                      id="phone"
                    />
                  </div>
                </div>
              </div>

              <div className="contact-message">
                <label htmlFor="message">Wallet type</label>

                <select name="" id="" className="form-control">
                  <option value="DEX">DEX</option>
                  <option value="CEX">CEX</option>
                </select>
              </div>

              <button className="btn-cta">Add new Profile</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
