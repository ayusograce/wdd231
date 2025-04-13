// MAIN FILE FOR EVERY PAGE


import { setupNavigation } from './navigation.js';
import { getQuotesData } from './quotes.js';
import { insertCurrentYear, insertLastModified } from './date.js';

import {year, lastYear, createBooksCards } from './yearbooks.js';


setupNavigation();
getQuotesData('./data/quotes.json');
insertCurrentYear();
insertLastModified();

createBooksCards(year, "#booksyear");
createBooksCards(lastYear, "#books2024");