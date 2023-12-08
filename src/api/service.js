import client from './client';
const advertsUrl = '/api/v1/adverts';

export const getLatestAdverts = () => {
  return client.get(advertsUrl);
};
export const createAdvert = advertData => {
  return client.post(advertsUrl, advertData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
