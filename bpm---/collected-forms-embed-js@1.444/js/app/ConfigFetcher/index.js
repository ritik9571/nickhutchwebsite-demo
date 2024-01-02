'use es6';

import axios from 'collected-forms-embed-js/vendor/axios';
import {
    getUtk
} from 'collected-forms-embed-js/utils/runtime';
import {
    getConfigUrl
} from 'collected-forms-embed-js/utils/domains';
const ROUTE = 'collected-forms/v1/config/json';

class ConfigFetcher {
    constructor(portalId, {
        isQa = false,
        hublet = ''
    } = {}) {
        this.portalId = portalId;
        this.url = `${getConfigUrl(isQa, hublet)}/${ROUTE}`;
    }

    getDefaultConfig() {
        return {
            formCaptureEnabled: false
        };
    }

    fetch() {
        return axios.get(this.url, {
            params: {
                portalId: this.portalId,
                utk: getUtk()
            }
        }).then(res => {
            // Adblockers can mess with our response and make it a string
            if (typeof res.data !== 'object') {
                throw res;
            }

            return res;
        }).then(({
            data: {
                formCaptureEnabled = false
            }
        }) => ({
            formCaptureEnabled
        }));
    }

}

export default ConfigFetcher;