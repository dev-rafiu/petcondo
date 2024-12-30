import DownloadApp from './download/page';
import FeaturedProducts from './featured-products/page';
import Hero from './hero/page';
import HowItWorks from './how-it-works/page';
import Reviews from './reviews/page';
import Welfare from './welfare/page';

export default function Home() {
  return (
    <>
      <Hero />
      <Welfare />
      <HowItWorks />
      <FeaturedProducts />
      <Reviews />
      <DownloadApp />
    </>
  );
}
