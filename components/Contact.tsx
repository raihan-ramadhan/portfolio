"use client";

import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import { Decoration } from "./Decoration";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="xl:min-h-screen scroll-mt-10 xl:scroll-mt-0"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="relative overflow-hidden w-full py-[50px] px-4 sm:px-8 md:px-6 lg:px-[200px] xl:px-[unset] flex items-center justify-center min-h-[inherit]">
        <Decoration.asterisk className="w-20 h-20 absolute top-1 right-4 stroke-cream mask-0-80-45deg opacity-40 sm:right-[50px] md:right-[40px] md:top-[40px] md:w-[120px] md:h-[120px]" />
        <Decoration.reverseItalicEllipse className="w-[170px] h-[220px] absolute -bottom-[5px] -left-[60px] stroke-cream -mask-0-60-45deg opacity-60 sm:w-[230px] sm:h-[300px] sm:bottom-[5px] sm:-left-[100px] md:w-[450px] md:h-[600px] md:-bottom-[25px] md:-mask-0-70-45deg lg:-mask-0-50-45deg xl:-mask-0-40-45deg md:-left-[130px] xl:bottom-[unset] xl:-top-[200px] xl:-left-[150px]" />

        <div className="gap-6 grid grid-cols-[repeat(12,minmax(0,1fr))] xl:grid-cols-[repeat(12,72px)] xl:justify-center">
          <div className="col-start-1 col-end-13 flex flex-col w-full justify-between xl:col-start-6 xl:col-end-13 text-center xl:text-left xl:pl-[72px] xl:order-last selection:text-black selection:bg-blue h-fit xl:h-full">
            <div>
              <SectionHeading>Let’s Talk</SectionHeading>

              <p className="text-blue-secondary text-[14px] sm:text-[16px]">
                Contact me directly at{" "}
                <a
                  className="underline"
                  href="mailto:raihanramadhan.rn22@gmail.com"
                >
                  raihanramadhan.rn22@gmail.com
                </a>{" "}
                or through this form.
              </p>
            </div>

            <div className="text-[20px] hidden xl:flex h-[160px] flex-col justify-between">
              <div className="flex w-full gap-1">
                <div className="w-[200px] font-heading shrink-0">Home</div>
                <div> : </div>
                <div>Pekanbaru, Riau, Indonesia.</div>
              </div>
              <div className="flex w-full gap-1">
                <div className="w-[200px] font-heading shrink-0">
                  Phone (WA)
                </div>
                <div> : </div>
                <div>+62877 4935 8232</div>
              </div>
              <div className="flex w-full gap-1">
                <div className="w-[200px] font-heading shrink-0">X</div>
                <div> : </div>
                <div>
                  <a
                    href="https://twitter.com/raihan_rn22"
                    target="_blank"
                    className="underline"
                  >
                    twitter.com/raihan_rn22
                  </a>
                </div>
              </div>
              <div className="flex w-full gap-1">
                <div className="w-[200px] font-heading shrink-0">Linkedin</div>
                <div> : </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/raihan-ramadhan-baab69227/"
                    target="_blank"
                    className="underline"
                  >
                    linkedin.com/in/raihan-ramadhan
                  </a>
                </div>
              </div>
              {/* <div className="flex w-full">
              <div className="w-[200px] font-heading">Dribbble</div>
              <div>
                :{" "}
                <a
                  href="https://dribbble.com/raihan22"
                  target="_blank"
                  className="underline"
                >
                  dribbble.com/raihan22
                </a>
              </div>
            </div> */}
            </div>
          </div>

          <form
            ref={formRef}
            className="col-start-1 col-end-13 xl:col-start-1 xl:col-end-6 flex flex-col mx-auto gap-[10px] bg-cream p-5 rounded-[15px] max-w-[408px] h-[440px] xl:h-[520px] xl:max-w-[unset] w-full md:px-[30px] md:py-[20px] lg:px-[40px] lg:py-[30px] z-10 shrink"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
              formRef.current?.reset();
            }}
          >
            <input
              className="h-[35px] bg-transparent text-black placeholder:text-black/60 outline-none border-b border-black sm:text-[18px] xl:text-[20px]"
              name="senderEmail"
              type="email"
              maxLength={500}
              required
              placeholder="Email"
            />
            <input
              className="h-[35px] bg-transparent text-black placeholder:text-black/60 outline-none border-b border-black sm:text-[18px] xl:text-[20px]"
              name="subject"
              type="text"
              required
              maxLength={500}
              placeholder="Subject"
            />
            <textarea
              className="flex-1 bg-transparent text-black placeholder:text-black/60 outline-none border-b border-black resize-none sm:text-[18px] xl:text-[20px]"
              name="message"
              required
              placeholder="Message"
              maxLength={5000}
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
    </motion.section>
  );
}
