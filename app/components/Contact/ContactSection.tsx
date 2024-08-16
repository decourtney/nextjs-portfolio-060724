"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState<boolean>(false); // To track email sending status
  const [successMessage, setSuccessMessage] = useState<string>(""); // To show success message
  const ref1 = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);
  const ref3 = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ref1, { once: true, amount: "some" });
  const isInView2 = useInView(ref2, { once: true, amount: "some" });
  const isInView3 = useInView(ref3, { once: true, amount: "some" });

  const validateForm = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validateForm();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS environment variables.");
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      setIsSending(true); // Start sending process
      try {
        const result = await emailjs.send(
          serviceId,
          templateId,
          { name, email, message },
          userId
        );
        console.log("Email sent: ", result.text);
        setSuccessMessage("Thank you! Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        if (error instanceof Error) {
          // The error is a known Error object
          console.error("Failed to send email: ", error.message);
        } else {
          // Handle any other unknown errors
          console.error("An unknown error occurred while sending the email.");
        }
      } finally {
        setIsSending(false); // End sending process
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setter(e.target.value);
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    };

  return (
    <section
      id="contact"
      className="w-full 2xl:w-[60%] mx-auto pt-16 content-center min-h-dvh"
    >
      <div className="lg:w-3/4 mx-auto ">
        <div className="space-y-24 mb-6 font-playfairDisplay font-bold">
          <div
            ref={ref1}
            className="text-4xl text-right"
            style={{
              translate: isInView1 ? "0 0" : "-10% 100%",
              transition: "all 0.5s ease-out",
            }}
          >
            <p>Interested in working together</p>
            <p>or discussing a potential opportunity?</p>
          </div>
          <div
            ref={ref2}
            className="text-3xl text-left"
            style={{
              translate: isInView2 ? "0 0" : "10% 100%",
              transition: "all 0.5s ease-out",
            }}
          >
            <p>I'm always open to exploring</p>
            <p> new roles and challenges.</p>
          </div>
          <div
            ref={ref3}
            className="text-2xl text-center"
            style={{
              translate: isInView3 ? "0 0" : "0 50%",
              transition: "all 0.5s ease-out",
            }}
          >
            <p>Let's connect and see how </p>
            <p>I can bring value to your project.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full 2xl:w-3/4 mx-auto font-montserrat"
        >
          <div className="col-span-1">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              variant="bordered"
              onChange={handleInputChange(setName)}
              className={`w-full ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="col-span-1">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              variant="bordered"
              onChange={handleInputChange(setEmail)}
              className={`w-full ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="col-span-1 lg:col-span-2">
            <Textarea
              placeholder="Message"
              name="message"
              value={message}
              variant="bordered"
              onClear={() => console.log("input cleared")}
              onChange={handleInputChange(setMessage)}
              className={`w-full ${errors.message ? "border-red-500" : ""}`}
              rows={4}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="w-full lg:w-1/2"
              disabled={isSending} // Disable button while sending
            >
              {isSending ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>

        {successMessage && (
          <p className="text-green-500 text-center pt-4">{successMessage}</p>
        )}

        <div className="flex justify-start 2xl:w-3/4 mx-auto mt-4 mb-2 gap-4">
          <Button
            size="lg"
            isIconOnly
            radius="full"
            variant="light"
            className=" text-[hsl(var(--nextui-primary-100))]"
            onPress={() =>
              window.open("https://www.linkedin.com/in/decourtney/")
            }
          >
            <FaLinkedin size={30} />
          </Button>
          <Button
            size="lg"
            isIconOnly
            radius="full"
            variant="light"
            className=" text-[hsl(var(--nextui-primary-100))]"
            onPress={() => window.open("https://github.com/decourtney")}
          >
            <FaGithub size={30} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
