import { useState } from "react"

export default function Sort({sortName, onClickSortName}) {
    const [catOpen, clickCat] = useState(false)

    const sortOptions = {
        '*': 'популярности',
        'price': 'по цене',
        'name': 'по алфавиту',
    };

    return (
        <div
            onClick={() => catOpen ? clickCat(false) : clickCat(true)}
            className="relative cursor-pointer"
        >
            <label className="font-bold cursor-pointer" htmlFor="">
                Сортировка по:
                <span

                    className="text-orange-400 font-normal cursor-pointer"> {sortOptions[sortName] || sortOptions["*"]}</span>
            </label>
            <div
                className={` absolute right-0 bg-gray-100 p-4 rounded-lg transition-opacity duration-300 grid grid-rows-3 gap-2 ${catOpen ? 'opacity-100' : 'opacity-0'}`}>
                <p
                    onClick={() => onClickSortName('*')}
                    className="cursor-pointer hover:text-orange-400">популярности</p>
                <p
                    onClick={() => onClickSortName('price')}
                    className="cursor-pointer hover:text-orange-400">по цене</p>
                <p
                    onClick={() => onClickSortName('name')}
                    className="cursor-pointer hover:text-orange-400">по алфавиту</p>
            </div>
        </div>
    )
}
