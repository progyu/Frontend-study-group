const fibonacci = (n) => {
  if(n === 1 || n === 2) return 1;

  const arr = [];

  arr[1] = 1;
  arr[2] = 1;

  for(let i = 3; i <= n; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
  }

  return arr[n];
}


console.log(fibonacci(5));