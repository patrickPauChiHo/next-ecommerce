import Stripe from "stripe";
import Product from "./components/Product";

const getProducts = async () => {
  //hook with stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  /*fetch all the products on stripe */
  const products = await stripe.products.list();
  //console.log(products);

  //fetch all the prices base on the product id from stripe
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      const features = product.metadata.features || "";
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features },
      };
    })
  );
  return productWithPrices;
};

export default async function Home() {
  const products = await getProducts();
  //console.log(products);
  return (
    <main className="grid grid-cols-fluid gap-16">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </main>
  );
}
