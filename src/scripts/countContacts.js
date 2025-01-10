import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    console.log('Error: ', err);
  }
};

console.log(await countContacts());
