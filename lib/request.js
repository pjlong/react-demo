export default function request(method, url, params) {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        user: {
          name: 'me',
          id: 1
        },
        message: 'React is great!'
      }
    });
  });
};
