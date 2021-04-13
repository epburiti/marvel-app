import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function (privateKey, publicKey) {
  const ts = Date.now();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
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
