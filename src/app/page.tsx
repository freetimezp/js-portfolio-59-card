import { Header } from "@/components/Header";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import CounterData from "@/components/CounterData/CounterData";
import { BestBusiness } from "@/components/BestBusiness";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
    </>
  )
}
