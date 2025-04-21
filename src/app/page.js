import BannerMain from "@/components/BannerMain";
import Instructions from "@/components/Instructions";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="h-screen">
      <Header/>
      <div className="flex flex-col  lg:items-center w-full h-full">
        <BannerMain/>
        <Instructions/>
      </div>

    </main>
  );
}
