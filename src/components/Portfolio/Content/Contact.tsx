/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <>
      <div className="wrapper contact__wrapper bottom-border">
        <div className="contact__text">
          <h2 className="contact__headline header-xl">Contact</h2>
          <p className="contact__description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I`&apos;`ll get back to you as soon as
            possible.
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__control">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <img
              src="/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <img
              src="/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <img
              src="/images/icon-invalid.svg"
              alt=""
              className="contact__invalid-icon"
              width="24"
              height="24"
            />
          </div>
          <div className="contact__control align-right">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <img
        className="contact__rings"
        src="/images/pattern-rings.svg"
        alt=""
        width="530"
        height="129"
      />
    </>
  );
};

export default Contact;
