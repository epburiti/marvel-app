import axios from 'axios';
import md5 from 'md5';

export default function apiRef(privateKey, publicKey) {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey).toString();
  const api = axios.create({
    baseURL: 'http://gateway.marvel.com',
    params: {
      ts,
      apikey: publicKey,
      hash,
    },
  });
  return api;
}
