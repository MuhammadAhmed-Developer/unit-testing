"use client"
import HomeComp from "@/components/Home";
import InputComponent from "@/components/Input";
import Users from "@/components/User";
import { handleOtherMethod } from "@/utils/helper";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("")

  const handleData = () => {
    setData("Hello")
  }



  return (
    <main className="">
      Functional component testing
      <button onClick={handleData} data-testid="btn1">update</button>
      <button onClick={handleOtherMethod} >handleOtherMethod</button>
      <h2>{data}</h2>
    </main>
  );
}
