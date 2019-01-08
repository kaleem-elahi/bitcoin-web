import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
<Layout>
  <div>
    <h1>Welcome to bitzPrice</h1>
    <Prices bpi={props.bpi.bpi} />
  </div>
</Layout>
);


Index.getInitialProps = async function() {
  console.log('dfsdfsdf');
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  console.log(data);
  return {
    bpi: data
  }
}

export default Index;

