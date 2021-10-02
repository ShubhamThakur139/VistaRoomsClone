let count = 1;
function count_person(){
   let person_count = document.getElementById("navbarDropdown");
   person_count.innerText = `${count} Guest`;
}
setInterval(count_person,1000);
function change(data){
   if(data === "adult_negative_change")
   {
      let parent = document.getElementById("person_count_adult");
      let counter = parent.textContent;
      if(counter > 1)
      {
         count--;
         parent.textContent = --counter;
         console.log(counter);
      }
   }
   else if(data === "adult_positive_change")
   {
      count++;
      let parent = document.getElementById("person_count_adult");
      let counter = parent.textContent;
      parent.textContent = ++counter;
      console.log(counter);
   }
   else if(data === "children_negative_change")
   {
      let parent = document.getElementById("person_count_child");
      let counter = parent.textContent;
      if(counter > 0)
      {
         count--;
         parent.textContent = --counter;
         console.log(counter);
      }
   }
   else if(data === "children_positive_change")
   {
      count++;
      let parent = document.getElementById("person_count_child");
      let counter = parent.textContent;
      parent.textContent = ++counter;
      console.log(counter);
   }
}