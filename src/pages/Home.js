import HeroSection from "../components/HeroSection";
import Improveskills from "../components/Improveskills";
import QuoteSection from "../components/QuoteSection";
import ChefsSection from "../components/ChefsSection";
export default function Home(){
    return(
       <div>
         <HeroSection/>
        <Improveskills/>
        <QuoteSection/>
        <ChefsSection/>
       </div>
    )
}