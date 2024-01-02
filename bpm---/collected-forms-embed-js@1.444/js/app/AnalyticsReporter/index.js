'use es6';

import {
    getAnalyticsUrl
} from 'collected-forms-embed-js/utils/domains';
const ROUTE = 'embed/v3';

class AnalyticsReporter {
    constructor(project, {
        isQa = false,
        hublet = ''
    } = {}) {
        this.url = `${getAnalyticsUrl(isQa, hublet)}/${ROUTE}`;
        this.project = project;
    }

    buildKey(key) {
        return `${this.project}-${key}`;
    }

    buildTimingUrl(key, value) {
        return `${this.url}/timings.gif?key=${this.buildKey(key)}&valueInMs=${value}`;
    }

    buildCountersUrl(key, value) {
        return `${this.url}/counters.gif?key=${this.buildKey(key)}&count=${value}`;
    }

    makeRequest(url) {
        const image = new Image();
        image.src = url;
    }

    reportCount(key, value = 1) {
        this.makeRequest(this.buildCountersUrl(key, value));
    }

    reportTiming(key, value) {
        this.makeRequest(this.buildTimingUrl(key, value));
    }

}

export default AnalyticsReporter;