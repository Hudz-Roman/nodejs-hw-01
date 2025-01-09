import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('All contacts successfully removed!');
  } catch (err) {
    console.log('Error removing contacts: ', err);
  }
};

removeAllContacts();
