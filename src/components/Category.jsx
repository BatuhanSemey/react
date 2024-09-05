import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryIndex } from '../redux/slices/counterSlice'

export default function Category() {
    const catIndex = useSelector((state) => state.categoryIndex.index)
    const dispatch = useDispatch()

    const categoryes = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <ul className="flex items-center justify-between basis-1/2 gap-3">
            {
                categoryes.map((item, index) => {
                    return <li
                        key={index}
                        onClick={() => dispatch(setCategoryIndex(index))}
                        className={index === catIndex ? "bg-black text-white py-3 px-7 rounded-full font-bold" : "bg-gray-100 py-3 px-7 rounded-full font-bold" + " text-center  hover:bg-black hover:text-white cursor-pointer"}>
                        {item}
                    </li>
                })
            }

        </ul>
    )
}