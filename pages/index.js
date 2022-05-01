import {callStorefront} from '../lib/api';
import {ProductsQuery} from '../lib/queries';
import Hero from '../components/home/Hero';
import NewIn from '../components/home/NewIn';
import BestSellers from '../components/home/BestSellers';
import PaymentIcons from '../components/home/PaymentIcons';
import Layout from '../components/shared/Layout';
import SwiperTest from '../components/home/SwiperTest';

export default function Home({products}) {
  // const { data } = useQuery('products', callStorefront, { initialData: products })

  // console.log ({data});

  console.log (products);

  return (
    <Layout>
      <section className="relative">
        <Hero />
      </section>
      <section className="pb-24 sm:pt-24 md:py-0 bg-blueGray-100 overflow-hidden">
        <NewIn products={products} />
      </section>
      <section className="py-24 2xl:py-44 bg-blueGray-100">
        <BestSellers products={products} />
      </section>
      <section>
        <SwiperTest />
        <PaymentIcons />
      </section>
    </Layout>
  );
}

export async function getStaticProps () {
  const {data} = await callStorefront (ProductsQuery);
  return {
    props: {
      products: data.products,
    },
  };
}
