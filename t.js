console.log(fruits.reduce((obj, el) => ({ ...obj, [el]: [el] ? obj[el] : 0 }), {}))