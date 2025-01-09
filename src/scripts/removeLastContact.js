import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    data.pop();
    await writeContacts(data);
    console.log('Last contact successfully deleted!');
  } catch (err) {
    console.log('Error with deleting last contact: ', err);
  }
};

removeLastContact();
