import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newOneContact = Array.from({ length: 1 }, () => createFakeContact());
    await writeContacts([...contacts, ...newOneContact]);
  } catch (err) {
    console.log('Error: ', err);
  }
};

addOneContact();
