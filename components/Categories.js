import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import sanityClinet,{urlFor} from "../sanity";
import CatogeryCard from './CatogeryCard';

const Categories = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        sanityClinet.fetch(`
    *[_type=="category"]
`).then(data => setCategory(data));
    }, [])
    console.log(category);
    return (

        <ScrollView horizontal>
        {
            category.map((info, index) => {
                return <CatogeryCard
                    key={info._id}
                    title={info.name}
                    imgUrl={urlFor(info.image).width(200).url()}
                />

            })
        }
</ScrollView>
)
}

export default Categories