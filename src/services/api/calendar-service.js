import client from './api-client';

const calendarService = client.resolvePaths(['Calendario']);

export default {
  getAll() {
    return calendarService.get(['GetAll']).then(data => data.result);
  },
};
