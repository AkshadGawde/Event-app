import '../styles/globals.css'
import Layout from '../components/events/layout/layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp;
