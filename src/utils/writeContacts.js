import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';
import { readContacts } from '../utils/readContacts.js';

export const writeContacts = async (newContact) => {
  try {
    const contacts = await readContacts();
    if (newContact.length !== 0) {
      contacts.push(newContact);
    }
    const dataToWrite = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Contact successfully written!');
  } catch (err) {
    console.log('Error writing contact: ', err);
  }
};
