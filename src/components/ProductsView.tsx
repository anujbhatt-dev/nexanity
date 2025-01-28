import React from 'react'
import { Category, Product } from '../../sanity.types'
import ProductGrid from './ProductGrid'
import CategorSelectorComponent from './CategorSelectorComponent'

export default function ProductsView({products,categories}:{products:Product[], categories: Category[]}) {
  return (
    
    <div className='flex flex-col' >

        {/* category */}
        <div className='w-full sm:w-[200px]'>
            <CategorSelectorComponent categories={categories}/>
        </div>

        {/* Products */}
        <div>
            <div>
                <ProductGrid
                products = {products}
                />
                <hr className='w-1/2 sm:w-3/4'/>
            </div>
        </div>
        
    </div>
  )
}
