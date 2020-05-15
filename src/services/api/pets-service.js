import client from './api-client';

const petsService = client.resolvePaths(['Mascota']);

export default {
  getCats() {
    return petsService.get(['GetFelinos']);
  },
};
