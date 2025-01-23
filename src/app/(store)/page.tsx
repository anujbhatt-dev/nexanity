import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { getAllProduct } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

export default async function Home() {
  const products = await getAllProduct();
  const categories = await getAllCategories();
  return (
    <div className="" >
         <Header/>
         <Button>
             click me
         </Button>

        {products &&
          products.map(product=>(
            <div key={product._id}>
              <ProductsView products={products}
              categories = {categories}
              />
              
            </div>
          ))
        }
    </div>
  );
}
