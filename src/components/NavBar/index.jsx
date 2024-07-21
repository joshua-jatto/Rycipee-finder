import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function NavBar() {

    const { searchParams, setSearchParams, handleSubmit } = useContext(GlobalContext);

    console.log(searchParams)

    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <NavLink to={"/"} className="text-5xl font-semibold text-[teal]">Rycipee</NavLink>

        <form onSubmit={handleSubmit} className="flex gap-4 items-center justify-center">
            <input
                type="text"
                name="search"
                placeholder="Searh a recipe..."
                className="bg-white/75 p-5 rounded-full outline-none lg:w-96 shadow-lg shadow-red-200 focus:shadow-red-200"
                onChange={e => setSearchParams(e.target.value)}
                value={searchParams}

            />
            <button
            onClick={handleSubmit}
            className="  text-[teal] text-2xl font-semibold bg-white/75 shadow-red-200 focus:shadow-red-200"
            >Go</button>
        </form>
        <ul className="flex gap-5 ">
            <li><NavLink
                to={"/"}
                className='text-2xl font-semibold text-black hover:text-gray-700 duration-300'
            >Home</NavLink>
            </li>

            <li><NavLink
                to={"/favourites"}
                className='text-2xl font-semibold text-black hover:text-gray-700 duration-300'
            >Favourites</NavLink>
            </li>


        </ul>
    </nav>
}