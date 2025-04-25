import React from 'react'
import Product from '../product/Product'
import Category from '../category/Category'
import AudioGear from '../audio-gear/AudioGear'

export default function Main({ arr, category }) {
    return (
        <main>
            <Product arr={arr} />
            <Category category={category} />
            <AudioGear />
        </main>
    )
}
