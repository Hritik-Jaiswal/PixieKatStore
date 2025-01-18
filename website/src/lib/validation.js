// Regular expressions for validation
export const VALIDATION_RULES = {
  // Allows letters, numbers, and underscores, 3-30 characters
  NAME_REGEX: /^[a-zA-Z0-9_]{3,30}$/,
  
  // Standard email regex
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

// Validation messages
export const VALIDATION_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_INVALID: 'Name can only contain letters, numbers, and underscores',
  NAME_LENGTH: 'Name must be between 3 and 30 characters',
  
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_INVALID: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
  
  LOGIN_FAILED: 'Invalid email or password',
  SIGNUP_FAILED: 'Failed to create account'
};

// Validation functions
export const validateName = (name) => {
  if (!name) return VALIDATION_MESSAGES.NAME_REQUIRED;
  if (!VALIDATION_RULES.NAME_REGEX.test(name)) return VALIDATION_MESSAGES.NAME_INVALID;
  return '';
};

export const validateEmail = (email) => {
  if (!email) return VALIDATION_MESSAGES.EMAIL_REQUIRED;
  if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) return VALIDATION_MESSAGES.EMAIL_INVALID;
  return '';
};

export const validatePassword = (password) => {
  if (!password) return VALIDATION_MESSAGES.PASSWORD_REQUIRED;
  if (!VALIDATION_RULES.PASSWORD_REGEX.test(password)) return VALIDATION_MESSAGES.PASSWORD_INVALID;
  return '';
};
