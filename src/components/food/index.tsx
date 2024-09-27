import { View, Pressable, Text, Image } from 'react-native';
import { FoodProps } from '../trending';
import { Ionicons } from '@expo/vector-icons';

export function CardHorizontalFood({food}: {food: FoodProps}) {
 return (
   <Pressable className='flex flex-col rounded-xl'>
    <Image
    source={{uri: food.image}}
    className='w-44 h-36 rounded-xl'
    />
    <View className='flex flex-row bg-neutral-900/90 w-fit gap-1 justify-center
                      top-2 right-3 px-2 py-1 items-center rounded-full absolute'>
        <Ionicons name='star' size={14} color="#ca8a04"/>

        <Text className='text-white text-sm'>{food.rating}</Text>
    </View>
    <Text className='text-green-700 text-lg font-medium'>{food.price}</Text>
    <Text className='text-black mt-1'>{food.name}</Text>
    <Text className='text-neutral-600 text-lg font-medium'>{food.time} - R$  {food.delivery}</Text>

   </Pressable>
  );
}