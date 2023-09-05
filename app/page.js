
import HOME from "@/components/HOME";
import Works from "@/components/Works";
import Header from "@/components/header";
import About from "@/components/About";
import Schedules from "@/components/Schedules";
import Review from "@/components/review";
import Blog from "@/components/Blog";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
      <Header/>
      <HOME/>
      <Works/>
      <About />
      <Schedules/>
      <Review/>
      <Blog/>
      <Footer/>
    </>
  )
}
