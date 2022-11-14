import styles from '../../styles/Home.module.scss';
import SanityClient from '../../utils/sanityClient';

export default function Home({ homeData }: any) {
  return (
    <div className={styles.container}>
      <code>{JSON.stringify(homeData)}</code>
    </div>
  );
}

export async function getStaticProps() {
  const client = new SanityClient();
  const homeData = await client.Query(`*[_type == "home"]`);
  return {
    props: {
      homeData,
    },
  };
}
