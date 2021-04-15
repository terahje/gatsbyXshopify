import React from 'react';
import { Layout, SEO, HompepageCollectionsGrid, FeatureProducts } from 'components';
import ProductContext from 'context/ProductContext'

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext)
  console.log(collections)
  return(
    <Layout>
      <HompepageCollectionsGrid collections={collections.filter(
        collection => collection.title !== 'Featured Hats' )}/>
        {!!collections.find(
          collection => collection.title === 'Featured Hats'
          ) && <FeatureProducts/>}
      
    </Layout>
  )
};

export default IndexPage;
