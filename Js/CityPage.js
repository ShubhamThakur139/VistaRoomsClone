// console.log("heloo");

let card_holder = document.getElementById("card_holder");

function appendData(data) {
  data.forEach((element) => {
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    col.innerHTML = `
      <div class="card">
        <img
          src=${element.img1}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5>${element.name}</h5>
          <p>${element.location}</p>
          <h6>${element.rooms}</h6>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h5>${element.cost}<span>/ night</span></h5>
              <small>(excl. taxes & charges)</small>
            </div>
            <div>
              <span>
                <i class="fa fa-angle-right font-20"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
    card_holder.append(col);
  });
}

async function getData() {
  let data = await fetch("http://localhost:3000/villas");
  let res = await data.json();
  //   console.log("res:", res);
  appendData(res);
}

getData();

// function appendData(data) {
//   data.forEach((element) => {
//     console.log(element);
//     // col div
//     let col = document.createElement("div");
//     col.setAttribute("class", "col");
//     // card div
//     let card = document.createElement("div");
//     card.setAttribute("class", "card");
//     // img element
//     let img = document.createElement("img");
//     img.setAttribute("class", "card-img-top");
//     img.src = `${element.img1}`;
//     // card body
//     let card_body = document.createElement("div");
//     card_body.setAttribute("class", "card-body");
//     // card body elements
//     // villa_name
//     let villa_name = document.createElement("h5");
//     villa_name.textContent = element.name;
//     // location
//     let location = document.createElement("h5");
//     location.textContent = element.location;
//     // rooms
//     let rooms = document.createElement("h5");
//     rooms.textContent = element.rooms;
//     // line horizontal
//     let hr = document.createElement("hr");
//     // other div
//     let indiv = document.createElement("div");
//     indiv.setAttribute(
//       "class",
//       "d-flex justify-content-between align-items-center"
//     );
//     // indiv childs

//     // appending elements
//     col.appendChild(card);
//     card.append(img, card_body);
//     card_body.append(villa_name, location, rooms, hr, indiv);
//     card_holder.append(col);
//   });
// }
