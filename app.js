

document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if(value) addItem(value);
});

function completeItem (){
   
 var item = this.parentElement.parentElement;
 var parent = this.parentElement.parentElement.parentElement;
 parent.removeChild(item);
}


function alarmItem (){ 
 alert('Do you want to set alarm for 7:00?')
  document.getElementById('whole').className='red'
  
}

function addItem (text){
    var list = document.getElementById('name')
    
  var item = document.createElement('li')
 
  item.innerText = text

  
  var container = document.createElement('div')
  container.classList.add('container')
  
  var complete = document.createElement('button')
  complete.classList.add('complete');
  complete.textContent = "complete"
  
  complete.addEventListener('click', completeItem)
 
  var alarm = document.createElement('button')
  alarm.classList.add('alarm');
  alarm.textContent = "alarm"
  
  alarm.addEventListener('click',alarmItem)
 
  
  container.appendChild(complete)
   container.appendChild(alarm)    
   item.appendChild(container)
   list.appendChild(item)
 
}
