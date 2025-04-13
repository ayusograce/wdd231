// MAIN FILE FOR EVERY PAGE


import { setupNavigation } from './navigation.js';
import { getQuotesData } from './quotes.js';
import { insertCurrentYear, insertLastModified } from './date.js';

import {openModal, closeModal} from './newsletter.js';


setupNavigation();
getQuotesData('./data/quotes.json');
insertCurrentYear();
insertLastModified();

openModal();
closeModal();