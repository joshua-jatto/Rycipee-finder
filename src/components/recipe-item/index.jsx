import { Link } from "react-router-dom"

export default function RecipeItem({ item }) {
    return <div key={item?.id} className="flex flex-col w-80 overflow-hidden p-5 bg-white shadow-xl gap-5 border-2">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-e-xl">
            <img src={item?.image_url} alt="recipe-item " className="block w-full" />
        </div>
        <div>
            <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`}
                className="bg-black p3 px-8 text-sm uppercase font-medium tracking-wider rounded-lg inline-block shadow-md mt-5 text-white"
            >Recipe details</Link>
        </div>
    </div>
}