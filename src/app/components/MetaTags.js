import Head from 'next/head';

const MetaTags = ({ title, description, keywords, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://miboutiqueonline.es" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
  </Head>
);

MetaTags.defaultProps = {
  title: 'Mi Boutique Online',
  description: 'Tu tienda online de moda con las últimas tendencias.',
  keywords: 'moda, boutique, tienda online, ropa',
  image: 'https://miboutiqueonline.es/og-image.jpg',
};

export default MetaTags;
