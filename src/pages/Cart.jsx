import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../App'

export default function Cart() {
    const navigate = useNavigate()
    const { cartPizza } = useContext(SearchContext)


    function goToCart(link) {
        navigate(link)
    }

    return (
        <>
            <div className="w-full flex items-center justify-center mt-10">
                <div className="grid grid-rows gap-3 w-8/12">

                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center gap-2">
                            <img src="/logo_drawer.png" alt="" />
                            <h1 className="text-3xl font-bold">Корзина</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/logo2_drawer.svg" alt="" />
                            <p className="text-gray-300">Очистить корзину</p>
                        </div>
                    </div>
                    {cartPizza.map((pizza) => (
                        <div className="flex items-center justify-between border-b p-3">
                            <div className="flex items-center gap-3">
                                <img className='w-16 h-16' src={pizza.imageUrl} alt="" />
                                <div className="grid grid-cols">
                                    <p className="font-bold">{pizza.name}</p>
                                    <p className="text-gray-400">{pizza.types === 0 ? 'Тонкое' : 'Традиционное'} тесто, 26см.</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/Minus.png" alt="" />
                                <span className="font-bold text-xl">2</span>
                                <img src="/Plus.png" alt="" />
                            </div>
                            <p className="font-bold text-xl">{pizza.price}тенге</p>
                            <img src="/exit.png" alt="" />
                        </div>
                    ))}


                    <div className="flex items-center justify-between">
                        <p>Всего пицц: <span className="font-bold">{cartPizza.length} шт.</span></p>
                        <p>Сумма заказа: <span className="font-bold text-orange-500">{cartPizza.reduce((total, element) => total + element.price, 0)} тенге.</span></p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div
                            onClick={() => goToCart('/')}
                            className=" px-5 py-3 rounded-full border flex items-center gap-2 cursor-pointer">
                            <img src="/arrow_left.svg" alt="" />
                            <p className="font-bold text-gray-300">Вернуться назад</p>
                        </div>
                        <div className="bg-orange-500 px-5 py-3 rounded-full cursor-pointer">
                            <p className="text-white font-bold">Оплатить сейчас</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}