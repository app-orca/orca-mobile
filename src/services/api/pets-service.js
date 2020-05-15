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

  /**
   * Returns pet info
   * @param {number} id id of the pet
   */
  getPetInfo(id) {
    console.log(id);
    return petsService
      .get(['GetMascotaDetalle'], {params: {Id: id}})
      .then(data => data.result);
  },
};
