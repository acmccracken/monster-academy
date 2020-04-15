import tokenService from './tokenService';

const BASE_URL = '/api/monsters/';

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(monster) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
    return fetch(BASE_URL, options, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(monster)
  }).then(res => res.json());}
