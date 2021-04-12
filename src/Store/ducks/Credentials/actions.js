import Types from './types';

export function setCredentials(privateKey, publicKey) {
  return {
    type: Types.SET_CREDENTIALS,
    payload: {
      privateKey,
      publicKey,
    },
  };
}
