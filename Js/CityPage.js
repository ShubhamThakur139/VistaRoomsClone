let card_holder = document.getElementById("card_holder");

// appending data to webpage by DOM
function appendData(data) {
  data.forEach((element) => {
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    col.addEventListener("click", () => {
      localStorage.setItem("villaInfo", JSON.stringify(element));
      location.href = "../Assets/VillaDetails.html";
    });
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
// getting data through api
async function getData() {
  let data = await fetch("http://localhost:3000/villas");
  let res = await data.json();
  appendData(res);
}

getData();

// Sign up Functionality Start

// constructor function to create data skelton
function userDetails(f_name, l_name, mobile, u_email, u_pass, res_city) {
  this.firstName = f_name;
  this.lastName = l_name;
  this.mobile = mobile;
  this.userEmail = u_email;
  this.userPass = u_pass;
  this.rescidentialCity = res_city;
}

// add user to database
async function addUser(event) {
  event.preventDefault();
  let f_name = document.getElementById("f_name").value;
  let l_name = document.getElementById("l_name").value;
  let mobile = document.getElementById("mobile").value;
  let u_email = document.getElementById("u_email").value;
  let u_pass = document.getElementById("u_pass").value;
  let res_city = document.getElementById("res_city").value;
  if (mobile.length != 10) {
    alert("Length should be equal to 10");
    document.getElementById("mobile").value = "";
  } else if (u_pass.length < 8) {
    alert("password length is too short");
    document.getElementById("u_pass").value = "";
  } else if (isEmailExist(u_email)) {
    alert("Email already exist");
    document.getElementById("u_email").value = "";
  }

  let data = new userDetails(f_name, l_name, mobile, u_email, u_pass, res_city);
  let url = "http://localhost:3000/users";
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  let data1 = await response.json();
}

// Sign up functionality start
