import { useParams } from 'react-router-dom';
import './advertPage.css';
import { AdvertDetailCard } from './components/AdvertDetailCard';

function AdvertPage() {
  // Todo use Effect like thet get adverts

  const product = {
    name: 'Sell Thing',
    description: 'Description thing',
    image: 'no-image.jpg',
    price: 50,
    sellOrSearch: true,
    tags: ['work', 'motor', 'lifestyle', 'mobile']
  };
  const params = useParams();

  return <AdvertDetailCard advert={product} />;
}
export default AdvertPage;
