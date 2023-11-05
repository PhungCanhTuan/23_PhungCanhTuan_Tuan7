import { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native"
import ShopItem from "../components/ShopItem";
import { fetchCity } from "../services/shop.api";

const Screen01 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCity().then(setData)
    }, [])

    return <View style={{padding: 20, flex: 1, backgroundColor: '#eee'}}>
        {data.map(item => {
            return <ShopItem key={item.id} shop={item}/>
        })}
    </View>
}

export default Screen01;