export const promisify = (f) => {
  return function (value) {
    return new Promise((resolve, reject) => {
      f(value, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };
};

export const all = (promises) => {
  if (!promises || !promises.length) return Promise.resolve(promises);

  return new Promise((resolve, reject) => {
    let result = [];
    let counter = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((d) => {
          result[i] = d;
          if (counter === promises.length - 1) resolve(result);
        })
        .catch(reject)
        .finally(() => {
          counter++;
        });
    }
  });
};

export const allSettled = (promises) => {
  if (!promises || !promises.length) return Promise.resolve(promises);

  return new Promise((resolve) => {
    const result = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((d) => {
          result[i] = d;
        })
        .catch((e) => {
          result[i] = e;
        })
        .finally(() => {
          count++;
          if (count === promises.length) resolve(result);
        });
    }
  });
};

export const race = (promises) => {
  if (!promises || !promises.length) return Promise.resolve(promises);

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve).catch(reject);
    }
  });
};

export const any = (promises) => {
  if (!promises || !promises.length) return Promise.resolve(promises);

  return new Promise((resolve, reject) => {
    const failed = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(resolve)
        .catch((e) => (failed[i] = e))
        .finally(() => {
          if (failed.length === promises.length) reject(failed);
        });
    }
  });
};
