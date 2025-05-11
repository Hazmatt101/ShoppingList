import ShoppingListItem from "../../model/ShoppingListItem";
import ListItem from "../list-item/ListItem";

export const ShoppingList = (props: { shoppingListItems: ShoppingListItem[]; }) => {
    const {shoppingListItems} = props;
    
    return (
        <>
        {shoppingListItems && shoppingListItems.length > 0 ? (
            <>
                {shoppingListItems.map((shoppingListItem: ShoppingListItem) => {
                    <ListItem storeName={shoppingListItem.storeName} itemName={shoppingListItem.itemName} itemQuantity={shoppingListItem.itemQuantity} itemPrice={shoppingListItem.itemPrice}/>
                })}
            </>
        ) : (
            <>
                <div>
                    No items in your shopping list yet.
                </div>
            </>
        )}
        </>
    )
}

export default ShoppingList;