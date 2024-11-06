import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes(){
    const recipes=[
        {
            title: "Mushroom Swiss Burger",
            image: "/Images/gallery/img3.png",
            authorImg: "/Images/chefs/img2.png"
        },
        {
            title: "Pepperoni",
            image: "/Images/gallery/img2.png",
            authorImg: "/Images/chefs/img4.png"
        },
        {
            title: "BBQ Burger",
            image: "/Images/gallery/img22.png",
            authorImg: "/Images/chefs/img3.png"
        },
        {
            title: "Jalebi",
            image: "/Images/gallery/img9.png",
            authorImg: "/Images/chefs/img6.png"
        },
        {
            title: " Burrito",
            image: "/Images/gallery/img17.png",
            authorImg: "/Images/chefs/img1.png"
        },
        {
            title: "Pesto Lasagna ",
            image: "/Images/gallery/img18.png",
            authorImg: "/Images/chefs/img4.png"
        },
        {
            title: "Mysore Masala Dosa",
            image: "/Images/gallery/img10.png",
            authorImg: "/Images/chefs/img6.png"
        },
        {
            title: "Veg Crispy",
            image: "/Images/gallery/img12.png",
            authorImg: "/Images/chefs/img3.png"
        },
        {
            title: "Guacamole ",
            image: "/Images/gallery/img19.png",
            authorImg: "/Images/chefs/img1.png"
        },
        {
            title: "Chole Bhature",
            image: "/Images/gallery/img11.png",
            authorImg: "/Images/chefs/img3.png"
        },{
            title: "Pav Bhaji",
            image: "/Images/gallery/img8.png",
            authorImg: "/Images/chefs/img2.png"
        },
        {
            title: "Tacos",
            image: "/Images/gallery/img7.png",
            authorImg: "/Images/chefs/img1.png"
        },
    ].sort(() => Math.random() - 0.5)
   return(
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
              {/* <RecipeCard/> */}
      
              {recipes.map((recipe,index)=>(
                <RecipeCard key={index} recipe={recipe}/>
              ))
              }
            </div>
        </div>
    )
}