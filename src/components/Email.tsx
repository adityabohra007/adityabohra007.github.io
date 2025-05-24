import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

type EmailSuccess = {
  onEmailSuccess: (data: { title: string; visible: boolean }) => void;
};

export const ContactUs = ({ onEmailSuccess }: EmailSuccess) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hmic5dn", "template_tqtoaf6", form.current!, {
        publicKey: "R4-RAM9I7MFnufbEe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          onEmailSuccess({ title: "Sent Successfully", visible: true });
          //   form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    <form
      ref={form}
      className="flex flex-col mt-3 text-base-content"
      onSubmit={sendEmail}
    >
      <label className="mb-4">Username</label>
      <input
        type="text"
        name="user_name"
        placeholder="Enter Your Name"
        className="input mb-5 w-full"
      />
      <label className="mb-4">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Enter Email"
        className="input mb-5 w-full"
      />
      <label className="mb-4">Message</label>
      <textarea
        name="message"
        className="textarea textarea-primary w-full"
      ></textarea>
      <input
        type="submit"
        className="btn btn-info self-end mt-4 w-[100px] "
        value={"send"}
      />
    </form>
  );
};
