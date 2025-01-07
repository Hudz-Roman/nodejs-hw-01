import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    console.log(data);
  } catch (err) {
    console.log('Error: ', err);
  }
};
