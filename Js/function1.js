let count1 = 1;
function count_person1(){
    let person_count = document.getElementById("navbarDropdown1");
    person_count.innerText = `${count1} Guest`;
 }
 function change1(data){
    if(data === "adult_negative_change")
    {
       let parent = document.getElementById("person_count_adult1");
       let counter = parent.textContent;
       if(counter > 1)
       {
          count1--;
          parent.textContent = --counter;
          console.log(counter);
       }
    }
    else if(data === "adult_positive_change")
    {
       count1++;
       let parent = document.getElementById("person_count_adult1");
       let counter = parent.textContent;
       parent.textContent = ++counter;
       console.log(counter);
    }
    else if(data === "children_negative_change")
    {
       let parent = document.getElementById("person_count_child1");
       let counter = parent.textContent;
       if(counter > 0)
       {
          count1--;
          parent.textContent = --counter;
          console.log(counter);
       }
    }
    else if(data === "children_positive_change")
    {
       count1++;
       let parent = document.getElementById("person_count_child1");
       let counter = parent.textContent;
       parent.textContent = ++counter;
       console.log(counter);
    }
 }
 setInterval(count_person1,1000);