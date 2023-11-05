import React, { useEffect, useState } from 'react'
import { View ,Text} from 'react-native'
import { fetchDrink } from '../services/drink.api';
import DrinkItem from '../components/DrinkItem';
import Button from '../components/Button';

export default function Screen04() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchDrink().then(setData)
    }, [])

  return (
    <View style={{flex: 1, padding: 15, gap: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#00BDD6", padding: 30}}>
            <View style={{gap: 10}}>
                <Text style={{textTransform: 'uppercase',fontWeight: 600, fontSize: 18, color: "#fff"}}>Cafe delivery</Text>
                <Text style={{textTransform: 'uppercase',fontWeight: 600, fontSize: 18, color: "#fff"}}>Order #18</Text>
            </View>
            <Text style={{color: "#fff", fontSize: 24, fontWeight: 600}}>$5</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#8353E2", padding: 30}}>
            <View style={{gap: 10}}>
                <Text style={{textTransform: 'uppercase',fontWeight: 600, fontSize: 18, color: "#fff"}}>Cafe</Text>
                <Text style={{textTransform: 'uppercase',fontWeight: 600, fontSize: 18, color: "#fff"}}>Order #18</Text>
            </View>
            <Text style={{color: "#fff", fontSize: 24, fontWeight: 600}}>$25</Text>
        </View>

        {data.splice(0, 2).map(item => <DrinkItem key={item.id} drink={item}/>)}

        <View style={{marginTop: 50}}>
            <Button>Pay now</Button>
        </View>
    </View>
  )
}
