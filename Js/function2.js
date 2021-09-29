let count2 = 1;
function count_person2(){
    let person_count = document.getElementById("navbarDropdown2");
    person_count.innerText = `${count2} Guest`;
 }
 function change2(data){
    if(data === "adult_negative_change")
    {
       let parent = document.getElementById("person_count_adult2");
       let counter = parent.textContent;
       if(counter > 1)
       {
          count2--;
          parent.textContent = --counter;
          console.log(counter);
       }
    }
    else if(data === "adult_positive_change")
    {
       count2++;
       let parent = document.getElementById("person_count_adult2");
       let counter = parent.textContent;
       parent.textContent = ++counter;
       console.log(counter);
    }
    else if(data === "children_negative_change")
    {
       let parent = document.getElementById("person_count_child2");
       let counter = parent.textContent;
       if(counter > 0)
       {
          count2--;
          parent.textContent = --counter;
          console.log(counter);
       }
    }
    else if(data === "children_positive_change")
    {
       count2++;
       let parent = document.getElementById("person_count_child2");
       let counter = parent.textContent;
       parent.textContent = ++counter;
       console.log(counter);
    }
 }
 setInterval(count_person2,1000);