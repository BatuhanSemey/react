import logo from '/header_logo.svg';
import card from '/card.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../App';


export default function Header() {
    const navigate = useNavigate();
    const { searchText, setSearchText } = useContext(SearchContext);
    const { cartPizza } = useContext(SearchContext);

    function goToCart(link) {
        navigate(link);
    }


    return (
        <div className="header flex items-center justify-between">
            <div onClick={() => goToCart('/')} className="flex items-center gap-4 cursor-pointer">
                <img src={logo} alt="" />
                <div className="">
                    <h1 className="font-bold">REACT PIZZA</h1>
                    <p className="text-gray-400">Самая вкусная пицца во вселенной</p>
                </div>
            </div>
            {/* Search bar with button inside */}
            <div className="flex-1 mx-10 relative">
                <input
                    type="text"
                    placeholder="Поиск пиццы..."
                    className="w-full p-2 border rounded-full pr-10"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button

                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full 
                        ${searchText ? "" : "opacity-0"}`}

                    onClick={() => setSearchText('')}
                >
                    <img src="/exit.png" alt="" />
                </button>
            </div>
            <div className="bg-orange-500 rounded-full flex items-center gap-1 px-5 py-3">
                <span className="font-bold text-white">{cartPizza.reduce((total, element) => total + element.price, 0)}$</span>
                <hr className="bg-white w-5 rotate-90" />
                <div onClick={() => goToCart('/cart')} className="flex items-center cursor-pointer">
                    <img src={card} alt="" />
                    <span className="font-bold text-white">{cartPizza.length}</span>
                </div>
            </div>
        </div>
    );
}
