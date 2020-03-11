document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  
  let input =  document.getElementById('new-task-description')
  let ul = document.getElementsByTagName('ul')[0]
  
  form.addEventListener("submit", function(event){
    event.preventDefault()
    let target = event.target 
    let div = target.parentNode.querySelector('div')
    let li = document.createElement('li')
 
    li.innerText = input.value 

    ul.append(li)

    //  li.innerHTML = input.value 
    //  ul.append(li)
  
})
 
 

});
