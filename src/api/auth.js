const EMAIL = 'my@email.com';
const PASSWORD = '1234';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === EMAIL && password === PASSWORD) {
        resolve(email);
      } else {
        reject('이메일이랑 패스워드 틀린듯');
      }
    }, 1000);
  });
};
