import { Card, CardContent, CardHeader } from "@mui/material";

interface ListItemProps {
    storeName: string;
    itemName: string;
    itemQuantity: number;
    itemPrice: number;
}

export const ListItem = ({storeName, itemName, itemQuantity, itemPrice}: ListItemProps) => {

    return (
        <>
            <Card>
                <CardHeader title={`${itemName} - ${storeName}`} />
                <CardContent>
                    <div>
                        <h5>{itemQuantity}</h5>
                        <h4>{itemPrice}</h4>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default ListItem;