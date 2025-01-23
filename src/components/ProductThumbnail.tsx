import React from 'react'
import { Product } from '../../sanity.types'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {imageUrl} from "../lib/imageUrl"

export default function ProductThumbnail({product}:{product:Product}) {
    const isOutOfStock = product.stock != null && product.stock<=0;

    
    return (
        
        <Link href={`/product/${product.slug?.current}`}
        className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock && "opacity-50"}`}
        >
            <div className='relative aspect-square w-full h-full overflow-hidden'>
            {
                product.image && (
                    <Image
                    className=' object-contain  transition-transform duration-300 group-hover:scale-105'
                    src = {imageUrl(product.image).url()}
                    fill 
                    sizes='(max-width:760px) 100vw, (max-widthL1200px) 50vw, 33vw'
                    alt={`${product.description}`}
                    />
                )
            }
            {product.name}
            {
                isOutOfStock && (
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <span className='text-white font-bold text-lg'>
                            Out of Stock
                        </span>
                    </div>
                )
            }
            </div>
        </Link>
    )
}
