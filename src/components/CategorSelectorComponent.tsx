import React from 'react'
import { Category } from '../../sanity.types'

export default async function CategorSelectorComponent({categories}:{categories:Category[]}) {
  
  return (
    <div className=''>
        {categories.map((category)=>{
          return <div>{category.title}</div>
        })}
    </div>
  )
}
