'use es6';

import OutpostErrorReporter from 'outpost/OutpostErrorReporter';
import KeyedError from './KeyedError';
/*
  project = Sentry project name
*/

class ErrorReporter {
    constructor(project, bundle, {
        hublet = '',
        isQa = false,
        portalId = 0,
        utk
    } = {}) {
        this.env = isQa ? 'qa' : 'prod';
        this.utk = utk;
        this.hublet = hublet;
        this.portalId = portalId;
        this.bundle = bundle;
        this.project = project;
        this.reporter = undefined;
        this.config = undefined;
    }

    buildConfig() {
        return {
            isEmbedApp: true,
            env: this.env,
            hublet: this.hublet,
            tags: {
                portalId: this.portalId,
                bundle: this.bundle
            },
            cookies: {
                utk: this.utk
            }
        };
    }

    report(err, extra = {}, level = 'report') {
        if (!this.reporter || !this.config) {
            throw new Error('report() called before setup()');
        }

        if (!this.reporter[level]) {
            throw new Error(`Level "${level}" is not supported`);
        }

        if (err instanceof KeyedError) {
            this.reporter[level](err.err || new Error(err.key), Object.assign({
                key: err.key
            }, extra, {}, err.extra));
        } else {
            this.reporter[level](err, extra);
        }
    }

    setup() {
        this.config = this.buildConfig();
        this.reporter = new OutpostErrorReporter(this.project, this.config);
        return this;
    }

}

export default ErrorReporter;