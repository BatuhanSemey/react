/* eslint-disable react/prop-types */
import { useState } from 'react';
import plusOrange from '/plus_orange.svg'



export default function PizzaList({id, imageUrl, name, price, types, sizes, onClickAddPizza }) {
    const [doughType, setDoughType] = useState(0);
    const [sizePizza, setSize] = useState(0);

    return (
        <>
            <div className=' flex flex-col justify-center items-center gap-3'>
                <img src={imageUrl} alt="" />
                <h3 className='font-bold text-xl'>{name}</h3>
                <div className="p-4 bg-gray-100 rounded-xl">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {
                            types.map((type, index) => (
                                <button
                                key={index}
                                    className={doughType === index ? `py-2 px-4 rounded-lg font-medium bg-gray-300` : `py-2 px-4 rounded-lg font-medium bg-white`}
                                    onClick={() => setDoughType(index)}>
                                    {type === 0 ? 'Тонкое' : 'Традиционное'}
                                </button>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={sizePizza === index ? `py-2 px-3 rounded-lg bg-gray-300` : `py-2 px-3 rounded-lg bg-white`}
                                    onClick={() => setSize(index)}>
                                    {size} см.
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className='flex justify-evenly items-center w-full'>
                    <span className='font-bold text-xl'>от {price} тг</span>
                    <div className='border border-orange-500 rounded-full flex items-center py-2 px-4 gap-2 text-orange-500 font-bold'>
                        <img src={plusOrange} alt="" />
                        <span
                        onClick={() => onClickAddPizza(id ,imageUrl, name, price, doughType, sizePizza)} className='cursor-pointer'>Добавить</span>
                    </div>
                </div>

            </div>
        </>
    )
}