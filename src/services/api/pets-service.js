import client from './api-client';

const petsService = client.resolvePaths(['Mascota']);

export default {
  /**
   * Returns pets list
   * @param {'Felinos' | 'Caninos'} type Type of pet
   */
  getPetByType(type = 'Felinos') {
    return petsService.get([`Get${type}`]).then(data => data.result);
  },
};
