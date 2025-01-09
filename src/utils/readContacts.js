import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log('Error reading contacts: ', err);
    return [];
  }
};
