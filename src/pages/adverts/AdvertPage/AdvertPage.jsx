import './advertPage.css';
import { AdvertDetailCard } from './components/AdvertDetailCard';

function AdvertPage() {
  const product = {
    name: 'Sell Thing',
    description: 'Description thing',
    image: 'no-image.jpg',
    price: 50,
    sellOrSearch: true,
    tags: ['work', 'motor', 'lifestyle', 'mobile']
  };

  return <AdvertDetailCard advert={product} />;
}
export default AdvertPage;
