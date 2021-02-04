// Promise 和 async / await 的用法

function play1(n) {
  console.log('call play1');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('atfer timeout play1 - ', n * n);
      resolve(n * n)
    }, 5000)
  })
}

function play2(n) {
  console.log('call play2');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('atfer timeout play2 - ', n + n);
      resolve(n + n)
    }, 3000)
  })
}

async function add1(x) {
  try {
    let play1value = await play1(20)
    let play2value = await play2(play1value)
    console.log( x + play1value + play2value);
  } catch (err) {
    console.log(err);
  }  
}

add1(10)