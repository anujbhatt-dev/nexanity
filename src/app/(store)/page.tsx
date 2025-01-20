import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { getAllProduct } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProduct();
  return (
    <div className="" >
         <Header/>
         <Button>
             click me
         </Button>

        {products &&
          products.map(product=>(
            <div key={product._id}>
              <h1>{product.name}</h1>
              <h2><strong>stock:</strong> {product.stock}</h2>
              <p>Image: {JSON.stringify(product.image)}</p>
            </div>
          ))
        }
    </div>
  );
}
