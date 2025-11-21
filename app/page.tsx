import Header from "@/components/Header";
import MealCards from "@/components/Meals";
import WhatsAppButton from "@/components/Whatsapp";

export default function Home() {
  return (
    <div>
      <Header />
      <MealCards />
      <WhatsAppButton />
    </div>
  );
}
