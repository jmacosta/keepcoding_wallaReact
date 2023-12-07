import { useEffect, useState } from 'react';
import { Button } from '../../../Components/sharedComponents/Button.jsx';
import { getLatestAdverts } from '../../../api/service.js';
import { AdvertCard } from '../AdvertsPage/components/AdvertCard.jsx';

import { Aside } from '../../../Components/Layout/Aside.jsx';
import { Main } from '../../../Components/Layout/Main.jsx';
import { FilterAdverts } from '../AdvertsPage/components/FilterAdverts.jsx';
import './advertspage.css';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return adverts.length ? (
    <>
      {console.log('al menos llego', adverts)}
      <Aside className='asideAdvertsPage'>
        <FilterAdverts />
      </Aside>
      <Main className='mainAdvertsPage'>
        {
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>
                <AdvertCard {...advert} />
              </li>
            ))}
          </ul>
        }
      </Main>
    </>
  ) : (
    <Button>Crea tu primer anuncio...</Button>
  );
};
export default AdvertsPage;