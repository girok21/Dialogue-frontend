export const isStrongPassword = (password: string): boolean => {
  // Example rule: at least 8 chars, one number, one symbol
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
};

export const doPasswordsMatch = (password: string, confirm: string): boolean => {
  return password === confirm;
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
