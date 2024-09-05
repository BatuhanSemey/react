import Category from "../components/Category";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import SceletonLoader from "../components/Skeleton";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../App";

//redux
import { useSelector, useDispatch } from 'react-redux'


export default function Home() {
  const indexPizza = useSelector((state) => state.categoryIndex.index)


  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const scelet = Array(8).fill(0);
  const [sortName, setSortName] = useState("популярности");


  const { searchText } = useContext(SearchContext);
  const { cartPizza, setCartPizza } = useContext(SearchContext);

  useEffect(() => {
    localStorage.setItem("pizza", JSON.stringify(cartPizza));
  }, [cartPizza]);


  function onClickSortName(name) {
    setSortName(name);
  }

  useEffect(() => {
    axios
      .get(`https://4b3b6a871b5b9320.mokky.dev/data`, {
        params: {
          category: indexPizza === 0 ? "*" : indexPizza,
          sortBy: sortName,
        },
      })
      .then((response) => {
        setData(response.data);
        setIsloading(false);
      });
  }, [sortName, indexPizza]);


  function sendPizza (id, img, name, price, type, size) {
    const obj = {
      id: id,
      imageUrl: img,
      name: name,
      types: type,
      sizes: size,
      price: price,
    }

    setCartPizza([...cartPizza, obj])
  }

  return (
    <>
      <div className="flex items-center justify-between mt-10">
        <Category />
        <Sort sortName={sortName} onClickSortName={onClickSortName} />
      </div>
      <div className="mt-10">
        <div className="mb-10">
          <h2 className="font-bold text-3xl">Все пиццы</h2>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {isLoading
            ? scelet.map((value, index) => <SceletonLoader key={index} />)
            : data
              .filter((pizza) =>
                searchText ? pizza.name.toLowerCase().includes(searchText.toLowerCase()) : pizza
              )
              .map((pizza) => (
                <PizzaList
                  onClickAddPizza={sendPizza}
                  key={pizza.id}
                  {...pizza}
                />
              ))}
        </div>
      </div>
    </>
  );
}
