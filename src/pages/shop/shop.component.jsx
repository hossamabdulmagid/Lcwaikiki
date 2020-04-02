import React from 'react';
import { selectCollections } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../component/preview.collection/collectionPreview.component';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections: selectCollections

})
export default connect(mapStateToProps )(ShopPage);

