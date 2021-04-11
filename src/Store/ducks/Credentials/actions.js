import Types from './types';

export function setCredentials(private_key,
  public_key) {
  console.log(private_key, public_key);
  return {
    type: Types.SET_CREDENTIALS,
    payload: {
      private_key,
      public_key
    }
  };
}