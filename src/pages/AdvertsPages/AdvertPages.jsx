import { useEffect, useState } from 'react';
import { Button } from '../../Components/sharedComponents/Button.jsx';
import { getLatestAdverts } from '../../api/service.js';
import { AdvertListCard } from './AdvertListCard.jsx';

import './advertpages.css';

const AdvertPages = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  // to do create a component who receives a object with date to show
  console.log(adverts);
  return adverts.length ? (
    adverts.map(advert => <AdvertListCard {...advert} />)
  ) : (
    <Button>Crea tu primer anuncio...</Button>
  );
};
export default AdvertPages;
