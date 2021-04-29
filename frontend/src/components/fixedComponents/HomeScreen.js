import React from 'react'

import data from '../../datas/data.js'
import Product from '../sharedComponents/product'

const HomeScreen = () => {
    return (  
        <div className="row center">
            { data.products.map(product => (
                <Product key={product._id} product={product} />
            )) }
        </div>
    )
}

export default HomeScreen
