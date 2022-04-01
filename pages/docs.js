import Layout from "../components/layout"
import Card from "../components/card";
import coffeeStoresData from '../data/coffee-stores.json'



export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

const Docs = (props) => {
    return (
      <Layout>
      <div className=" pt-[200px] grid grid-flow-col justify-evenly">
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
    
    )
}


export default Docs