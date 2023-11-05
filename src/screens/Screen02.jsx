import { useState, useEffect } from "react"
import { View } from "react-native"
import DrinkItem from "../components/DrinkItem";
import {fetchDrink} from "./../services/drink.api"
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Screen02 = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const pressHandler = () => {
        navigation.navigate("SCREEN_04");
    }

    useEffect(() => {
        fetchDrink().then(setData)
    }, [])

    return <View style={{padding: 20, backgroundColor: '#eee'}}>
        {data.map(item => <DrinkItem key={item.id} drink={item}/>)}

        <Button onPress={pressHandler}>Go to cart</Button>
    </View>
}

export default Screen02