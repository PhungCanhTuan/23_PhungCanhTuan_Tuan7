import { Text } from 'react-native'
import { Pressable } from 'react-native'

export default function Button({children, onPress}) {
  return (
    <Pressable style={{width: '100%', padding: 10, backgroundColor: "#EFB034", borderRadius: 10}} onPress={onPress}>
        <Text style={{textTransform: 'capitalize', textAlign: 'center', fontSize: 20, color: '#fff'}}>{children}</Text>
    </Pressable>
  )
}
