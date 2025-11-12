import Navbar from "./components/Navbar"
import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"

export default function App () {

    const [items, setItems] = useState([
        {id:1, text:"Item 1"},
        {id:2, text:"Item 2" },
        {id:3, text:"Item 3" }
    ])

    const addItem = (item) => {
        setItems([...items, item])
    }

    const deleteItem = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter(item => item.id !== id))
        }
    }


    const editItem = (item) => {
        const input = window.prompt("Update Text:", item.text)
        if (input) setItems(
            items.map(current => current.id === item.id ? {...current, text: input} : current)
        )
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar items={items} clearItems={clearItems} />
            <div className="container pt-5">
                <div className="container pt-5">
                    <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
                        <Form addItem={addItem} />
                        <List items={items} deleteItem={deleteItem} editItem={editItem} />
                    </div>
                </div>
            </div>
        </div>
    ) 
}