import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
export default function QuoteSection(){
    return(
        <div className="section quote">
          <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is more than fuel; it's love, culture, comfort, and connection on a plate. Every bite tells a story, every meal brings us together, and every flavor makes life a little richer.<FontAwesomeIcon icon={faQuoteRight}/></p>
          <p className="quote-author">- Antonio Carluccio</p>

        </div>
    )
}