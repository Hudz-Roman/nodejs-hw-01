import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const writeContacts = async (data) => {
  try {
    const dataToWrite = JSON.stringify(data, null, 2);
    await fs.writeFile(PATH_DB, dataToWrite, 'utf8');
    console.log('Contact successfully written!');
  } catch (err) {
    console.log('Error writing contact: ', err);
  }
};
