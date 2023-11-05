import { Image, Pressable, Text, View } from "react-native"

const DrinkItem = ({drink}) => {
    const {name, price, image} = drink;

    return <View style={{marginBottom: 20, borderWidth: 1, borderColor: '#aaa', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 30}}>
        <View style={{flexDirection: 'row', gap: 5}}>
            <Image source={{uri: image}} style={{width: 75, height: 75, backgroundColor: 'gray'}}/>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 600}}>{name}</Text>
                <Text style={{fontSize: 16, color: '#aaa', fontWeight: 500}}>${price}</Text>
            </View>
        </View>

        <View>
            <View style={{flexDirection: 'row', gap: 25}}>
                <Pressable style={{padding: 5, borderRadius: '100%', width: 25, height: 25, backgroundColor: "green", justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: 18}}>+</Text>
                </Pressable>

                <Pressable style={{padding: 5, borderRadius: '100%', width: 25, height: 25, backgroundColor: "green", justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: 18}}>-</Text>
                </Pressable>
            </View>
        </View>
    </View>
}

export default DrinkItem;