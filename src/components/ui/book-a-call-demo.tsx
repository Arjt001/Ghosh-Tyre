"use client";

import React from "react";
import { BookCallButton } from "./book-a-call-button";

export default function BookCallDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-950 dark:to-neutral-900 flex justify-center items-center">
      <BookCallButton
        onClick={() => {
          console.log("Book a call clicked!");
        }}
      />
    </div>
  );
}
