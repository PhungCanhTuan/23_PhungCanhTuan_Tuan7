import { useNavigation } from "@react-navigation/core";
import { Image, Pressable, Text, View } from "react-native";

const ShopItem = ({shop}) => {
    const navigation = useNavigation();

    const {name, address, avatar, status, min_estimate, max_estimate} = shop;

    return <Pressable onPress={() => navigation.navigate("SCREEN_02")}>
        <View style={{flex: 1, width: '100%', marginBottom: 15, backgroundColor: '#fff'}}>
            <Image source={{uri: avatar}} style={{width: '100%', height: 100}} resizeMode='contain'/>
            <View style={{padding: 15, gap: 5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 15}}>
                    {status ? <View style={{padding: 5, borderRadius: 5, backgroundColor: '#eee'}}>
                            <Text style={{color: '#40c057', fontSize: 16, fontWeight: 500}}>Accepting Orders</Text>
                    </View>:
                    <View style={{padding: 5, borderRadius: 5, backgroundColor: '#eee'}}>
                            <Text style={{color: '#fa5252', fontSize: 16, fontWeight: 500}}>Tempory Unavaliable</Text>
                    </View> }

                    <View style={{padding: 5, borderRadius: 5, backgroundColor: '#eee', flex: 1}}>
                        <Text style={{color: '#fa5252', fontSize: 16, fontWeight: 500}}>{min_estimate}-{max_estimate} minutes</Text>
                    </View>

                </View>
                <Text style={{fontSize: 18, fontWeight: 600}}>{name}</Text>
                <Text style={{color: '#aaa', fontWeight: 500, fontSize: 16}}>{address}</Text>
            </View>
        </View>
    </Pressable>
}

export default ShopItem;