import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantVerticalItem } from './vertical';
export interface RestaurantProps{
    id: string;
    name: string;
    image: string;
}

export function RestaurantList() {

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])
    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.0.11:3000/restaurants")
            const data =  await response.json()
            setRestaurants(data);
        }
        getFoods();
       }, [])

 return (
   <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( item => (
        <RestaurantVerticalItem item={item} key={item.id}/>
    ))}
   </View>
  );
}