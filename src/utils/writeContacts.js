import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const dataToWrite = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Contact successfully written!');
  } catch (err) {
    console.log('Error: ', err);
  }
};
