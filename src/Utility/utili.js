export function filterArr(arr) {
  return arr.filter((item) => {
    return item.amount >= 0;
  });
}

export function filterArrExp(arr) {
  return arr.filter((item) => {
    return item.amount < 0;
  });
}
export function reduceArr(myObj) {
  if (Object.keys(myObj).length > 0) {
    return myObj.reduce((acc, ele) => {
      return acc + parseInt(ele.amount);
    }, 0);
  } else {
    return 0;
  }
}
