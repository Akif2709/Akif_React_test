const FetchApi = () => {
  const API = 'http://uinames.com/api/?amount=5&ext';
  return fetch(API).then(res => res.json());
};

export default FetchApi;
