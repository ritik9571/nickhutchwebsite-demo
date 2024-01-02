'use es6';

import CollectedForms from './index';
CollectedForms.init();
window.__hsCollectedFormsDebug = {};
window.__hsCollectedFormsDebug.manualStart = CollectedForms.init.bind(CollectedForms);