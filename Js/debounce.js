var timerId;
var timerId1;
var timerId2;
async function main(){
    let list = document.getElementById("city_name_list");
    let data = document.getElementById("search").value;
    console.log(data);
    if(data.length < 3){
        return false;
    }
    if(data.length != null)
    {
        list.style.display = "block";
    }
    block_removal();
    setInterval(block_removal , 1000);
    let data_retrieved = await searchdata(data);
    append_data(data_retrieved.items);
}
async function searchdata(d){
    let res = await fetch(`https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${d}`)
    let element = await res.json();
    return element;
}
function block_removal(){
    let list = document.getElementById("city_name_list");
    let data = document.getElementById("search").value;
    if(data.length === 0)
    {
        list.style.display = "none";
        list.textContent = "";
    }
}
function append_data(dr){
    dr.forEach(({ station_code , station_name , city_name , state_name }) =>{
        console.log(station_code +  " " + station_name + " " + city_name + " " + state_name)
        let list = document.getElementById("city_name_list");
        let list_items = document.createElement("div");
        list_items.className = "li";
        let list_items_city_name = document.createElement("p");
        list_items_city_name.innerHTML = `<p class="lin"><a href="">City Name: ${city_name}<a><p>`;
        list_items_city_name.className ="licn";
        list_items.append(list_items_city_name);
        list.append(list_items);
        let list_items_state_name = document.createElement("p");
        list_items_state_name.textContent = `State Name: ${state_name}`;
        list_items_state_name.className = "listaten";
        list_items.append(list_items_state_name);
        list.append(list_items);
        let list_items_station_name = document.createElement("p");
        list_items_station_name.textContent = `Station Name: ${station_name}`;
        list_items_station_name.className = "listationn";
        list_items.append(list_items_station_name);
        list.append(list_items);
        let list_items_station_code = document.createElement("p");
        list_items_station_code.textContent = `Station Code: ${station_code}`;
        list_items_station_code.className = "lisc";
        list_items.append(list_items_station_code);
        list.append(list_items);
    })
}
function debounce(func , delay){
    let data_search = document.getElementById("search");
    console.log(data_search);
    if(data_search.length < 3){
        return false;
    }
    if(timerId){
        clearInterval(timerId);
    }
    timerId = setTimeout(() =>{
        func()
    } , delay)
}
async function main1(){
    let list = document.getElementById("city_name_list1");
    let data = document.getElementById("search1").value;
    console.log(data);
    if(data.length < 3){
        return false;
    }
    if(data.length != null)
    {
        list.style.display = "block";
    }
    block_removal1();
    setInterval(block_removal1 , 1000);
    let data_retrieved = await searchdata1(data);
    append_data1(data_retrieved.items);
}
async function searchdata1(d){
    let res = await fetch(`https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${d}`)
    let element = await res.json();
    return element;
}
function block_removal1(){
    let list = document.getElementById("city_name_list1");
    let data = document.getElementById("search1").value;
    if(data.length === 0)
    {
        list.style.display = "none";
        list.textContent = "";
    }
}
function append_data1(dr){
    dr.forEach(({ station_code , station_name , city_name , state_name }) =>{
        console.log(station_code +  " " + station_name + " " + city_name + " " + state_name)
        let list = document.getElementById("city_name_list1");
        let list_items = document.createElement("div");
        list_items.className = "li";
        let list_items_city_name = document.createElement("p");
        list_items_city_name.innerHTML = `<p class="lin"><a href="">City Name: ${city_name}<a><p>`;
        list_items_city_name.className ="licn";
        list_items.append(list_items_city_name);
        list.append(list_items);
        let list_items_state_name = document.createElement("p");
        list_items_state_name.textContent = `State Name: ${state_name}`;
        list_items_state_name.className = "listaten";
        list_items.append(list_items_state_name);
        list.append(list_items);
        let list_items_station_name = document.createElement("p");
        list_items_station_name.textContent = `Station Name: ${station_name}`;
        list_items_station_name.className = "listationn";
        list_items.append(list_items_station_name);
        list.append(list_items);
        let list_items_station_code = document.createElement("p");
        list_items_station_code.textContent = `Station Code: ${station_code}`;
        list_items_station_code.className = "lisc";
        list_items.append(list_items_station_code);
        list.append(list_items);
    })
}
function debounce1(func , delay){
    let data_search = document.getElementById("search1");
    console.log(data_search);
    if(data_search.length < 3){
        return false;
    }
    if(timerId1){
        clearInterval(timerId1);
    }
    timerId = setTimeout(() =>{
        func()
    } , delay)
}
async function main2(){
    let list = document.getElementById("city_name_list2");
    let data = document.getElementById("search2").value;
    console.log(data);
    if(data.length < 3){
        return false;
    }
    if(data.length != null)
    {
        list.style.display = "block";
    }
    block_removal2();
    setInterval(block_removal2 , 1000);
    let data_retrieved = await searchdata2(data);
    append_data2(data_retrieved.items);
}
async function searchdata2(d){
    let res = await fetch(`https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${d}`)
    let element = await res.json();
    return element;
}
function block_removal2(){
    let list = document.getElementById("city_name_list2");
    let data = document.getElementById("search2").value;
    if(data.length === 0)
    {
        list.style.display = "none";
        list.textContent = "";
    }
}
function append_data2(dr){
    dr.forEach(({ station_code , station_name , city_name , state_name }) =>{
        console.log(station_code +  " " + station_name + " " + city_name + " " + state_name)
        let list = document.getElementById("city_name_list2");
        let list_items = document.createElement("div");
        list_items.className = "li";
        let list_items_city_name = document.createElement("p");
        list_items_city_name.innerHTML = `<p class="lin"><a href="">City Name: ${city_name}<a><p>`;
        list_items_city_name.className ="licn";
        list_items.append(list_items_city_name);
        list.append(list_items);
        let list_items_state_name = document.createElement("p");
        list_items_state_name.textContent = `State Name: ${state_name}`;
        list_items_state_name.className = "listaten";
        list_items.append(list_items_state_name);
        list.append(list_items);
        let list_items_station_name = document.createElement("p");
        list_items_station_name.textContent = `Station Name: ${station_name}`;
        list_items_station_name.className = "listationn";
        list_items.append(list_items_station_name);
        list.append(list_items);
        let list_items_station_code = document.createElement("p");
        list_items_station_code.textContent = `Station Code: ${station_code}`;
        list_items_station_code.className = "lisc";
        list_items.append(list_items_station_code);
        list.append(list_items);
    })
}
function debounce2(func , delay){
    let data_search = document.getElementById("search2");
    console.log(data_search);
    if(data_search.length < 3){
        return false;
    }
    if(timerId2){
        clearInterval(timerId2);
    }
    timerId2 = setTimeout(() =>{
        func()
    } , delay)
}