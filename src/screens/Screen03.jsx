import {React, useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Screen03(){

    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch("https://653f48409e8bd3be29e02746.mockapi.io/shop")
        .then(response => response.json())
        .then(setData)
    }
    ,[])

    const navigator=useNavigation();

    const btnHandle=()=>{
        navigator.navigate('SCREEN_01')
    }
    
    return(
     <View style={{flex: 1, justifyContent:'center', alignItems: 'center', gap:20}}>
         <Text style={{fontSize: 27, fontWeight: 'bold', marginBottom: 20}}>
            Welcome to Cafe world
         </Text>
         {data.map((item)=>{
             return(
                 <View style={{width: 250, height: 80, borderRadius: 16}}>
                     <Pressable><Image source={URL=item.img} style={{width: 250, height: 80, borderRadius: 16}}/></Pressable>
                 </View>
             )
         })}
         <Pressable onPress={btnHandle} style={{backgroundColor:"cyan", width: 200, height: 50, justifyContent:'center', alignItems: 'center', borderRadius: 10}}>
             <Text style={{fontSize:20, color:'white'}}>Get Started!</Text>
         </Pressable>
     </View>
    )
}