"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission, e.g., send to email or save to database
      console.log({ name, email, message });
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
    <section id="contact" className="w-full pt-12 content-center min-h-dvh">
      {/* <div className="text-center text-[hsl(var(--nextui-primary-100))] text-5xl font-bold">
        <h1>CONTACT</h1>
      </div> */}

      <div className="lg:w-3/4 mx-auto ">
        <div className="space-y-24 mb-6">
          <div className="text-4xl text-right">
            <p>Interested in working together</p>
            <p>or discussing a potential opportunity?</p>
          </div>
          <div className="text-3xl">
            <p>I'm always open to exploring</p>
            <p> new roles and challenges.</p>
          </div>
          <div className="text-2xl text-center">
            <p>Let's connect and see how </p>
            <p>I can bring value to your project.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full xl:w-3/4 mx-auto"
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
            <Button type="submit" className="w-full lg:w-1/2">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
