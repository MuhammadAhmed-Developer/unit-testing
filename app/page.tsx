"use client"
import HomeComp from "@/components/Home";
import InputComponent from "@/components/Input";
import Users from "@/components/User";
import { handleOtherMethod } from "@/utils/helper";
import { useState } from "react";

export default function Home() {

  return (
    <main className="flex flex-col justify-center">
      get all by role
      <button>click 1</button>
      <button>click 1</button>
      <button>click 1</button>
      <button>click 1</button>

      <option>
        <select>1</select>
        <select>2</select>
        <select>3</select>
        <select>4</select>
      </option>

    </main>
  );
}
