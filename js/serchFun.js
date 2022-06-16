myObject = [{id:"10" , name:"15"},{id:"10" , name:"hussin"}]
window.localStorage.setItem("myObject", JSON.stringify(myObject));
 retrive = localStorage.getItem("myObject");
 obj = JSON.parse(retrive)
 console.log(obj[1].name);
 