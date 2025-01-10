import Image from "next/image";
import Header from "./_component/Header";
import Hero from "./_component/Hero";
import Budgets from "./(routes)/dashboard/budgets/page";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  );
}
