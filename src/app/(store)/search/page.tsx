import ProductGrid from '@/components/ProductGrid';
import { getProductByName } from '@/sanity/lib/products/getProductByName';
import { notFound } from 'next/navigation';
import React from 'react'


export default async function SearchPage({
    searchParams
}:{
    searchParams:Promise<{
        query : string;
    }>
}) {

  const {query} = await searchParams;
  const products = await getProductByName(query)
  if(!products.length) return notFound();
  return (
    <ProductGrid products={products}/>
  )
}
