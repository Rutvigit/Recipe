export default function Improveskills(){
    const list = [
        "Learn new recipes",
        "Plan your week’s meals with ease and flavor!",
        "Share Your Taste Journey with the World!",
        "Know nutrition facts",
        "Get Cooking Tips",
        "Get Ranked",

    ]
    
    return(
        <div className="section improve-skills">
            <div className="col img">
                  <img src="/Images/gallery/img18.png" alt=""/>     
            </div>
        <div className="col typography">
           <div className="title">
              <h1>Improve Your Culinary Skills</h1>
              { list.map((item,index)=>(
                <p className="skill-item" key={index}>{item}</p>
              ))}
              <button className="btn">Signup Now</button>
           </div>
        </div>
    </div>
    )
}