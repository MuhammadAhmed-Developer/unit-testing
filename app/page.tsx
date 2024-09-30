"use client"
import HomeComp from "@/components/Home";
import InputComponent from "@/components/Input";
import Users from "@/components/User";
import { handleOtherMethod } from "@/utils/helper";
import { useState } from "react";

export default function Home() {

  return (
    <main className="flex flex-col justify-center">
      get multiple role
      <button>click 1</button>
      <button>click 2</button>
      <label htmlFor="input1">username</label>
      <input type="text" id="input1" />
      <input type="text" />
      <div role="div">div semantic tag</div>
    </main>
  );
}
