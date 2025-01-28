import AddToBasketButton from '@/components/AddToBasketButton';
import { imageUrl } from '@/lib/imageUrl';
import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export  default async function productPage({params}:{params:Promise<{productSlug:string}>}) {
  const {productSlug} = await params;
  const product = await getProductBySlug(productSlug);
  if(!product) return notFound();

  const isOutOfStock = product.stock != null && product.stock<=0;
  
  return (
    <div className='container ms-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock && "opacity-50" }`}>
              { product.image && (
              <Image src={(imageUrl(product.image).url())}
              alt={product.name ?? "Product Image"}
              fill 
              className='object-contain transition-transform duration-300 hover:scale-105'
              />
              )}

              {
                isOutOfStock && (
                  <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                    <span className='text-white font-bold tet-lg'>
                          Out of Stock
                    </span>
                  </div>
                )
              }
          </div>

          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
              <div className='text-xl font-semibold mb-4'>
                Rs {product.price?.toFixed(2)}
              </div>
              <div className='prose max-w-noe mb-6'>
                  {
                    Array.isArray(product.description) && (
                      <PortableText value={product.description}/>
                    )
                  }
              </div>
              <div className='mt-6'>
                <AddToBasketButton product={product} disabled={isOutOfStock}/>
              </div>
            </div>
            
          </div>
      </div>   
    </div>
  )
}
