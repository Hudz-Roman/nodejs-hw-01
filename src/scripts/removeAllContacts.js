import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    data.splice(0, data.length);
    await writeContacts(data);
    console.log('All contacts was deleted!!');
  } catch (err) {
    console.log('Error with deleting contacts: ', err);
  }
};

removeAllContacts();
