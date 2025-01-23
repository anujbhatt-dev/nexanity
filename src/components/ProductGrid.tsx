"use client"
import React from 'react'
import { Product } from '../../sanity.types'
import ProductThumbnail from './ProductThumbnail'
import {AnimatePresence, motion} from "framer-motion"

export default function ProductGrid({products}:{products:Product[]}) {
  return (
    <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-4'>
        {products.map((product)=>(
          <AnimatePresence key={product._id} >
            <motion.div
            layout
            initial={{opacity:0.2}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className='flex justify-center'
            >
            <ProductThumbnail product={product}/>
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  )
}
