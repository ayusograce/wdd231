// IMPORTING THE FUNCTIONS FOR THE CONTACT-JOIN PAGE

// THE NEWSLETTER.JS AND THE VISITS.JS

import {setupNavigation} from './navigation.js';
import {getQuotesData} from './quotes.js';
import {insertCurrentYear, insertLastModified} from './date.js';

import {openModal, closeModal} from './newsletter.js';
import {lastVisitMessage} from './visits.js';


setupNavigation();
getQuotesData('./data/quotes.json');
insertCurrentYear();
insertLastModified();

lastVisitMessage();
openModal();
closeModal();