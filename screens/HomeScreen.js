import { View, Text,SafeAreaView, Image,TextInput, ScrollView} from "react-native";
import React, { useEffect,useState} from "react";
import { Feather ,Ionicons} from "@expo/vector-icons";
import sanityClinet from "../sanity";
import Categories from "../components/Categories";

const HomeScreen = () => {

    const [featuredDatas,setFeaturedDats ]=useState([]);



    useEffect(() => {
        sanityClinet.fetch(`
    *[_type=="featured"]{
...,
restaurant[]->{
    ...,
    dishes[]->
}
}`).then(data => setFeaturedDats(data));
},[])
return (
    <SafeAreaView className="bg-white pt-5">
    <View className="flex-row pb-3  mt-3 items-center mx-3 space-x-2">
        <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" }}
                className="h-10 w-10 bg-gray-300 p-4 rounded-full" />
            <View className="flex-1  item-">
                <Text className="font-bold   text-gray-400 text-xs ">Deliver Now !</Text>
                <Text className="font-bold  text-xl">Current Location.. <Feather name="chevron-down" size={20} color="#E33342"/></Text>
            </View>
            <Ionicons name="person" size={30} color="#E33342" className/>
    </View>
    <View className="flex-row  items-center space-x-2 mx-4 pb-2">
            <View className="flex-row flex-1 space-x-1  items-center bg-gray-200 p-3">
                <Ionicons name="search-outline" size={20} color="grey" />
                <TextInput placeholder="Reastaurants and Cuisines"/>
            </View>
            <Feather name="sliders" size={20} color="#E33342" />
        </View>
        <ScrollView>
            <Categories/>
        </ScrollView>
    </SafeAreaView>
);
};

export default HomeScreen;
