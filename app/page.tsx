import HomeComp from "@/components/Home";
import InputComponent from "@/components/Input";
import Users from "@/components/User";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Users />
      <HomeComp />
      This is main screen
      {/* <img src="/favicon.ico" alt="logo" title="logo" /> */}
      <input type="text" placeholder="input testing" name="name" readOnly value={"Ahmed"} />
      <InputComponent />
    </main>
  );
}
