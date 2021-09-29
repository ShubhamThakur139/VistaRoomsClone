// console.log("heloo");

function appendData(data) {
  data.forEach((element) => {
    console.log(element);
  });
}

async function getData() {
  let data = await fetch("http://localhost:3000/villas");
  let res = await data.json();
  //   console.log("res:", res);
  appendData(res);
}

getData();
