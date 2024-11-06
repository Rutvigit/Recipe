import ChefCard from './ChefCard'
export default function ChefsSection(){
    const chefs =[
        {
            name: "Antonio Carluccio",
            img: "/Images/chefs/img1.png",
            recipesCount: "20",
            cuisine: "Mexican",
        },
        {
            name: "Vikas Khanna",
            img: "/Images/chefs/img2.png",
            recipesCount: "40",
            cuisine: "Indian",
        },
        {
            name: "Kunal Kapur",
            img: "/Images/chefs/img3.png",
            recipesCount: "30",
            cuisine: "Indian",
        },
        {
            name: "Ricardo Muñoz Zurita",
            img: "/Images/chefs/img4.png",
            recipesCount: "10",
            cuisine: "Italian",
        },
        {
            name: "Ching He Huang ",
            img: "/Images/chefs/img5.png",
            recipesCount: "20",
            cuisine: "Chinese",
        },
        {
            name: "Garima Arora",
            img: "/Images/chefs/img6.png",
            recipesCount: "30",
            cuisine: "Indian",
        },

    ]

    return(
       
        <div className="section chefs">
            <div className="title"><h1>Top Chefs</h1></div>
            <div className="top-chefs-container">
            {/* <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/>
            <ChefCard/> */}
            {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>)}
            </div>
        </div>
    )
}