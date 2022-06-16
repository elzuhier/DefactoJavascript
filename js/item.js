// Start Header and footer
function checkMF(e){
    var elements =  document.querySelectorAll(".radio");
    for(var i = 0;i<2;i++)
    {
        elements[i].children[0].classList.remove("check-radio");
    }
    e.children[0].classList.add("check-radio")
  }
  function cheFooter(){
      document.querySelectorAll(".check")[0].children[0].classList.toggle("checked");
  }
  var float = document.querySelector("#appear-floating");
  function appear(){
  document.querySelector("#floating").classList.add("non");
  
  };
  function disappear(){
      document.querySelector("#floating").addEventListener("mouseover" , function(){
          document.querySelector("#floating").classList.add("non");
      });
      document.querySelector("#floating").addEventListener("mouseout" , function(){
          document.querySelector("#floating").classList.remove("non");
  
      });
      document.querySelector("#floating").classList.remove("non");
  
  
  };
   function catApper(ite){
    
      ite.children[1].classList.add("non");
  
   }
   function catDisAppear(ite){
       
      ite.children[1].addEventListener("mouseover" , function(){
          ite.children[1].classList.add("non");
      });
  
      ite.children[1].addEventListener("mouseout" , function(){
      ite.children[1].classList.remove("non");
   });
   ite.children[1].classList.remove("non");
  }
// End Header and footer