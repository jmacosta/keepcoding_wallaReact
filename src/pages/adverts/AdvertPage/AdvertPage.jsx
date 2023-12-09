import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAdvert } from '../../../api/service';
import './advertPage.css';
import { AdvertDetailCard } from './components/AdvertDetailCard';

function AdvertPage() {
  const { advertId } = useParams();

  // const advertId = 'bb37771a-5832-4234-8021-79f8118d893a';
  const [advert, setAdvert] = useState([]);
  useEffect(() => {
    getAdvert(advertId).then(advert => setAdvert(advert));
  }, [advertId]);

  return <AdvertDetailCard key={advertId} advert={advert} />;
}
export default AdvertPage;
