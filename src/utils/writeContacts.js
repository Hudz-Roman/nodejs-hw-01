import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (contacts) => {
  try {
    const dataToWrite = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Contacts successfully written!');
  } catch (err) {
    console.log('Error writing contacts: ', err);
  }
};

//! Maybe problem here!
