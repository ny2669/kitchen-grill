import Dessert from "@/components/Dessert";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HighLights from "@/components/HighLights";
import Ingredients from "@/components/Ingredients";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import OurStory from "@/components/OurStory";
import Stats from "@/components/Stats";
import TimeWrapper from "@/components/TimeWrapper";
import Video from "@/components/Video";
import Visit from "@/components/Visit";


export default function Home() {
  return (
    <main className=" ">
      <Hero/>
  <TimeWrapper/>
  <OurStory/>
  <Ingredients/>
  <Visit/>
  <Video/>
  <Menu/>
<Dessert/>
< HighLights/>
<Map/>
<Footer/>



   
    </main>
  );
}
