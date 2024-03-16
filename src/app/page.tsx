import { Header } from "@/components/Header";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import CounterData from "@/components/CounterData/CounterData";
import { BestBusiness } from "@/components/BestBusiness";
import ChooseYourCards from "@/components/ChooseYourCards/ChooseYourCards";
import ControlBilling from "@/components/ControlBilling/ControlBilling";
import Testimonials from "@/components/Testimonials/Testimonials";
import { PaymentsMethods } from "@/components/PaymentsMethods";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
      <ControlBilling />
      <Testimonials />
      <PaymentsMethods />
    </>
  )
}
