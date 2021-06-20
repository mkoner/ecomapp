import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'

import CollectionPage from  './collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'


const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
})


const CollectionContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer