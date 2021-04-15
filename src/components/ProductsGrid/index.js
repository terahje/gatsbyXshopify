import React from 'react'
import { ProductsGridWrapper } from './styles'
import { ProductTile } from '../ProductTile'

export function ProductsGrid({products}){
    return (
        <ProductsGridWrapper>
             {products.map(product => (
                <ProductTile 
                imageFluid={product.images[0].localFile.childImageSharp.fluid}
                key={product.shopifyId} 
                title={product.title}/>
            ))}
        </ProductsGridWrapper>
    )
}
