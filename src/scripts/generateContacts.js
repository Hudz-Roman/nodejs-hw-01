import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  for (let i = 1; i <= number; i++) {
    writeContacts(createFakeContact());
  }
};

generateContacts(4);
