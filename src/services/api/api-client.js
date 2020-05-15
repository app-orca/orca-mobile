import {Http, Uri} from '../http';

const apiUri = Uri.http('54.226.123.116', ['api', 'services', 'app']);

export default new Http(apiUri);
