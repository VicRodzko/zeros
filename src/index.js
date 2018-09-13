module.exports = function getZerosCount(number) {
  let a = Math.floor(number/5);
  let b = Math.floor(number/(5*5));
  let c = Math.floor(number/(5*5*5));
  let d = Math.floor(number/(5*5*5*5));
  let e = Math.floor(number/(5*5*5*5*5));
  let f = Math.floor(number/(5*5*5*5*5*5));
  let g = Math.floor(number/(5*5*5*5*5*5*5));
  let h = Math.floor(number/(5*5*5*5*5*5*5*5));
  let i = Math.floor(number/(5*5*5*5*5*5*5*5*5));
  let j = Math.floor(number/(5*5*5*5*5*5*5*5*5*5));
  let k = Math.floor(number/(5*5*5*5*5*5*5*5*5*5*5));
  let l = Math.floor(number/(5*5*5*5*5*5*5*5*5*5*5*5));
  let m = Math.floor(number/(5*5*5*5*5*5*5*5*5*5*5*5*5));
  let n = Math.floor(number/(5*5*5*5*5*5*5*5*5*5*5*5*5*5));

  let resultNull = a+b+c+d+e+f+g+h+i+j+k+l+m+n;
  return resultNull;
}
