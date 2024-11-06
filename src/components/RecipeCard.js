import Customimg from "./Customimg"
export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
            <Customimg imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Deliciously diverse, our menu offers a world of flavors to satisfy every craving!</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}