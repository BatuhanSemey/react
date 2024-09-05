import React, { createContext, useContext, useState } from "react";

const itemsContext = createContext()

export function ItemsProvider({ children }) {
    const [items, setItems] = useState([])

    return (
        <itemsContext.Provider value={{ items, setItems }}>
            {children}
        </itemsContext.Provider>

    )
}

export function useItems() {
    return useContext(itemsContext)
}