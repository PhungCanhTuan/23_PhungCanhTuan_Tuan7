import { Text, View } from "react-native"

const Headers = ({title}) => {
    return <View style={{padding: 15, backgroundColor: "#eee"}}>
        <Text style={{fontSize: 24, fontWeight: 600}}>
            {title}
        </Text>
    </View>
}

export default Headers