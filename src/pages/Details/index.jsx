import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context"
import { useParams } from "react-router-dom"


export default function Details() {
    const { id } = useParams()
    const { recipeDetailsData, setRecipeDetailsData,handleAddToFavourites,favouritesList } = useContext(GlobalContext);

    const [Loading, setLoading] = useState(false)

    async function getRecipeDetailsData() {
        setLoading(true)
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await res.json()



            if (data?.data) {
                setRecipeDetailsData(data?.data)
                setLoading(false)
            }


        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getRecipeDetailsData()
    }, []);

    if (Loading) {
        return <div>Loading Recipe details, kindy wait...</div>
    };

    console.log(recipeDetailsData, 'recipes')

    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden roounded-x group ">
                <img
                    src={recipeDetailsData?.recipe?.image_url}
                    alt="recipe-image"
                    className="h-full w-full object-cover block group-hover:scale-105 duration-300" />
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.recipe?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{recipeDetailsData?.recipe?.title}</h3>

            <div>
                <button 
                className="p-3 px-8  rounded-lg uppercase text-sm font-medium tracking-wider mt-3 inline-block shadow-sm bg-black hover:scale-105 text-white"
                onClick={()=>handleAddToFavourites(recipeDetailsData?.recipe)}
                >{
                    favouritesList && favouritesList.length > 0 && favouritesList.findIndex(item => item.id === recipeDetailsData?.recipe?.id) !== -1? "remove from favourites💔": "Add to favourites❤"
                }</button>
            </div>

            <div>
                <span className="text-2xl font-semibold text-black">Ingredients</span>
                <ul className="flex flex-col gap-3">
                    {
                        recipeDetailsData?.recipe?.ingredients.map(ingredient => <li>
                            <span className="text-2xl font-semibold text-black hover:font-bold cursor-pointer">{ingredient.quantity} {ingredient.unit}</span>
                            <span className="text-2xl font-semibold text-black hover:font-bold cursor-pointer"> {ingredient.description}</span>
                        </li>)
                    }
                </ul>
            </div>
        </div>

    </div>
}