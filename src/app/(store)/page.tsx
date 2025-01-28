import { getAllProduct } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";


export default async function Home() {
  const products = await getAllProduct();
  const categories = await getAllCategories();
  return (
    <div className="" >                  
        {products &&          
            <div>
              <ProductsView products={products}
              categories = {categories}
              />
              
            </div>          
        }
    </div>
  );
}
