import { useEffect, useState } from "react";
import ShoppingListItem from "../../model/ShoppingListItem";
import ShoppingList from "../shopping-list/ShoppingList";

export const Home = ({}) => {
    const [shoppingListItems, setShoppingListItems] = useState<ShoppingListItem[]>([]);

    useEffect(() => {
        (async () => {
            // const existingShoppingListResponse = //make db call
        })();
    }, []);

    return (
        <>
            <ShoppingList shoppingListItems={shoppingListItems} />
        </>
    );
}