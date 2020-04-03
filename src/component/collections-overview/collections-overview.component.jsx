import React from 'react'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'
import { selectCollections } from '../../redux/shop/shop.selector'
import  CollectionPreview  from '../preview.collection/collectionPreview.component.jsx'
import { createStructuredSelector } from 'reselect'


const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>

);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  
  })
  export default connect(mapStateToProps)(CollectionsOverview);