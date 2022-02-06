import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
  <>
    <Head>
      <title>My page :: My Blog</title>
      <meta property="og:title" content="My page :: My Blog" />
    </Head>
    <article>
      <h1>My page!</h1>
      <Image
        src="/post/my-page/floresta.jpg"
        width={1280}
        height={720}
      />
    </article>
  </>
)

export default Hello