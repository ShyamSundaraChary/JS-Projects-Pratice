// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  // Create an array of character sets to use in password generation
  // The character sets are each an object with a string of characters and a boolean
  // indicating whether or not that set of characters should be included in the password
  const characterSets = [
    { chars: 'abcdefghijklmnopqrstuvwxyz', include: includeLowercase },
    { chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', include: includeUppercase },
    { chars: '0123456789', include: includeNumbers },
    { chars: '!@#$%^&*()_+-=', include: includeSymbols },
  ];

  const passwordCharacterSet = characterSets.reduce((acc, { chars, include }) => {
    if (include) acc += chars;
    return acc;
  }, '');

  if (length <= 0) {
    return '(password length must be at least 1)';
  }
  if (passwordCharacterSet.length === 0) {
    return '(At least 1 set of character needs to be selected)';
  }

  const generatedPassword = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.random() * passwordCharacterSet.length | 0;
    generatedPassword.push(passwordCharacterSet[randomIndex]);
  }

  return generatedPassword.join('');
}


const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                               includeLowercase, 
                               includeUppercase, 
                               includeNumbers, 
                               includeSymbols);

console.log(`Generated password: ${password}`);