import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {

    const [searchParams, setSearchParams] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favouritesList, setFavouritesList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`);
            const data = await res.json()


            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setIsLoading(false)
                setSearchParams('')
                navigate('/')
            }

        } catch (error) {
            console.error('handle this error', error)
            setIsLoading(false)
            setSearchParams('')
            
        }
    }

    function handleAddToFavourites(getCurrentItem) {
        
        let cpyFavoritesList = [...favouritesList];
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id);

        if(index === -1){
            cpyFavoritesList.push(getCurrentItem)
        }else{
            cpyFavoritesList.splice(index)
        }

        setFavouritesList(cpyFavoritesList)
    }

    console.log(favouritesList,'favourites list')

    return <GlobalContext.Provider
        value={{
            searchParams,
            setSearchParams,
            handleSubmit,
            recipeList,
            isLoading,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavourites,
            favouritesList
        }}>
        {children}
    </GlobalContext.Provider>
}