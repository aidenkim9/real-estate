import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Conatact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "e821432e-6fc5-4ba4-ac49-185f93e0ecf5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 overflow-hidden w-full"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 under font-light decoration-1">
          With Us
        </span>
      </h1>
      <p className="mx-auto max-w-80 text-center text-gray-500 mb-12">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="bg-blue-600 px-12 py-3 rounded-md mb-10 text-white">
          {result ? result : "Send Message"}
        </button>
      </form>

      {/* <div className="w-full mx-auto">
        <div className="flex mb-10 mx-auto gap-8">
          <div>
            <h3 className="mb-3">Your Name</h3>
            <input
              className="border px-3 py-2 rounded-lg border-neutral-300"
              type="text"
              placeholder="your name"
            />
          </div>
          <div>
            <h3 className="mb-3">Your Email</h3>
            <input
              className="border px-3 py-2 rounded-lg border-neutral-300"
              type="text"
              placeholder="your Email"
            />
          </div>
        </div>
        <div>
          <h3>Message</h3>
          <input type="text" placeholder="Message" />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Conatact;
