'use es6';

import squareSpace from './squareSpace';
import unbounce from './unbounce';
import hubspot from './hubspot';
import iphorm from './iphorm';
import normal from './normal';
const Checkers = [squareSpace, unbounce, hubspot, iphorm, normal];
export default function getId(element) {
    for (let i = 0; i < Checkers.length; i++) {
        const idChecker = Checkers[i];

        if (idChecker.test(element)) {
            return idChecker.getId(element);
        }
    }

    return '';
}