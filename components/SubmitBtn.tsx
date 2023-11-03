import React from "react";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Icons } from "./Icons";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[35px] outline-none disabled:bg-opacity-65 text-black w-fit border-b border-black disabled:text-black/60"
      disabled={pending}
    >
      {pending ? (
        <>
          Submitting{" "}
          <Icons.loading className="fill-black w-4 h-4 animate-spin" />
        </>
      ) : (
        <>
          Submit{" "}
          <Icons.send className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 fill-black w-[27px] h-[25px]" />
        </>
      )}
    </button>
  );
}
