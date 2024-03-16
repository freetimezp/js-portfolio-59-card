import { Header } from "@/components/Header";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import CounterData from "@/components/CounterData/CounterData";
import { BestBusiness } from "@/components/BestBusiness";
import ChooseYourCards from "@/components/ChooseYourCards/ChooseYourCards";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
    </>
  )
}
