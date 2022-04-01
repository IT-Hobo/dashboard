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
        <span className="text-8xl text-blue-600">Dashboard</span>
      </div>
      <Layout>
        <div className=" grid grid-flow-col justify-evenly">
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
