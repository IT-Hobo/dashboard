import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Layout from "../components/layout";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  return (
    <div className="flex flex-col">
      <div className="my-6 flex justify-center">

      </div>
      <Layout>
        <div className="flex flex-col justify-evenly md:flex-row items-center space-y-4  ">
          {props.coffeeStores.map((coffeeStore) => {
            return (
              <Card
                key={coffeeStore.id}
                name={coffeeStore.name}
                address={coffeeStore.address}
                imgUrl={coffeeStore.imgUrl}
                websiteUrl={coffeeStore.websiteUrl}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
}
