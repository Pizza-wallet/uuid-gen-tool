const { v4: uuidv4 } = require('uuid');

const generateUUID = (type) => {
  switch (type) {
    case 'merchantId':
      return uuidv4();
    case 'locationId':
      return uuidv4();
    case 'membershipId':
      return uuidv4();
    case 'clientId':
      return uuidv4();
    default:
      throw new Error(`Invalid UUID type: ${type}`);
  }
};

const [,, type] = process.argv;

if (type) {
  try {
    const uuid = generateUUID(type);
    console.log(`Generated UUID for ${type}: ${uuid}`);
  } catch (error) {
    console.error(error.message);
  }
} else {
  console.error('Please provide a UUID type (merchantId, locationId, membershipId, clientId).');
}
