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

// First Row
function changeColorOnMouseOver(){
    document.getElementById("activity-tracker-span").style.color="orangered"
}
function changeColorMouseOut(){
    document.getElementById("activity-tracker-span").style.color="#333"
}
// Second Row
function x(){
    var x=document.getElementById("ModelDropDownDiv");
    var y= document.getElementById("SizeDropDownDiv");
    var z=document.getElementById("ColorDropDownDiv");
    var w=document.getElementById("PriceRangeDropDownDiv");
    if (x.style.display==="none")  
        {
            document.getElementById("ModelDropBoxs").style.color="orangered";
            x.style.display="inline";
            y.style.display="none";
            z.style.display="none";
            w.style.display="none";

        }
    else
        {
            x.style.display="none";
            document.getElementById("ModelDropBoxs").style.color="rgb(70, 68, 68)";

        }
}
function y(){
    var x=document.getElementById("ModelDropDownDiv");
    var y= document.getElementById("SizeDropDownDiv");
    var z=document.getElementById("ColorDropDownDiv");
    var w=document.getElementById("PriceRangeDropDownDiv");
    if (y.style.display==="none")  
        {
            document.getElementById("SizeDropBoxs").style.color="orangered";
            y.style.display="inline";
            x.style.display="none";
            z.style.display="none";
            w.style.display="none";

        }
    else
        {
            y.style.display="none";
            document.getElementById("SizeDropBoxs").style.color="rgb(70, 68, 68)";

        }
}
function z(){
    var x=document.getElementById("ModelDropDownDiv");
    var y= document.getElementById("SizeDropDownDiv");
    var z=document.getElementById("ColorDropDownDiv");
    var w=document.getElementById("PriceRangeDropDownDiv");
    if (z.style.display==="none")  
        {
            document.getElementById("ColorDropBoxs").style.color="orangered";
            z.style.display="inline";
            x.style.display="none";
            y.style.display="none";
            w.style.display="none";

        }
    else
        {
            z.style.display="none";
            document.getElementById("ColorDropBoxs").style.color="rgb(70, 68, 68)";

        }
}
function w(){
    var x=document.getElementById("ModelDropDownDiv");
    var y= document.getElementById("SizeDropDownDiv");
    var z=document.getElementById("ColorDropDownDiv");
    var w=document.getElementById("PriceRangeDropDownDiv");
    if (w.style.display==="none")  
        {
            document.getElementById("PriceRangeDropBoxs").style.color="orangered";
            w.style.display="inline";
            x.style.display="none";
            y.style.display="none";
            z.style.display="none";

        }
    else
        {
            w.style.display="none";
            document.getElementById("PriceRangeDropBoxs").style.color="rgb(70, 68, 68)";

        }
}

// Third Row
function OnMouseOver3(){
    document.getElementById("xFontAwesom").style.color="orangered";
}
function OnMouseOut3(){
    document.getElementById("xFontAwesom").style.color="#333";
}

//fourth Row
    function pp(){
        document.getElementById("ii").style.color="red"
    }
    //////// storage
var men =
[
{Id: "200",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "201",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "202",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "203",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "204",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "205",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "206",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "207",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "208",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "209",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "210",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "211",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "212",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "213",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "214",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "215",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "216",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "217",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "218",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "219",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "220",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "221",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "222",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "223",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "224",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "225",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "226",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "227",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "228",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "229",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "230",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "231",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "232",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "233",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "234",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "235",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "236",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "237",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "238",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "239",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "240",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "241",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "242",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "243",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "244",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "245",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "246",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "247",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "248",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "250",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "251",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "252",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "253",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "254",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
];
//women category
// KNITWEAR -- SHIRT&BLOUSE -- SWEATSHIRTS&HOODIES -- JEANS -- TROUSERS -- TUNICS -- 6ategory
var women =
[
{Id: "100",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "101",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "102",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "103",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "104",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "105",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "106",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "107",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "108",category:"KNITWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "109",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "110",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "111",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "112",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "113",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "114",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "115",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "116",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "117",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "118",category:"SHIRT&BLOUSE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "119",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "120",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "121",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "122",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "123",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "124",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "125",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "126",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "127",category:"SWEATSHIRTS&HOODIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "128",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "129",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "130",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "131",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "132",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "133",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "134",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "135",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "136",category:"JEANS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "137",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "138",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "139",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "140",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "141",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "142",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "143",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "144",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "145",category:"TROUSERS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "146",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "147",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "148",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "150",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "151",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "152",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "153",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "154",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "155",category:"TUNICS",size:["s","m","l","xl"],color:"blue",price:"255"},
]
// kid category 
// HOMEWEAR -- PLUS SIZE -- SPORTSWEAR -- ACCESSSORIES -- UNDERWEAR -- 5category
var kid =
[
{Id: "300",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "301",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "302",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "303",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "304",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "305",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "306",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "307",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "308",category:"HOMEWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "309",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "310",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "311",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "312",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "313",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "314",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "315",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "316",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "317",category:"PLUS SIZE",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "318",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "319",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "320",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "321",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "322",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "323",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "324",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "325",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "326",category:"SPORTSWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "327",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "328",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "329",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "330",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "331",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "332",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "333",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "334",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "335",category:"ACCESSSORIES",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "336",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "337",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "338",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "339",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "340",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "341",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "342",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "343",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
{Id: "344",category:"UNDERWEAR",size:["s","m","l","xl"],color:"blue",price:"255"},
];
       var WomenCollection = document.getElementsByClassName("woman-col-links");
       var MenCollections = document.getElementsByClassName("man-col-links");
       var KidCollections = document.getElementsByClassName("kid-col-links")
        for(i = 0;i<WomenCollection.length;i++)
        {
           WomenCollection[i].addEventListener("click" , function(event){
           // console.log(event.target.innerText);
               setNEwLocal("woman", event)
           });
        }
        
        for(i = 0;i<MenCollections.length;i++)
        {
           MenCollections[i].addEventListener("click" , function(event){
           // console.log(event.target.innerText);
               setNEwLocal("man" , event)
           });
        }
        for(i = 0;i<KidCollections.length;i++)
        {
           KidCollections[i].addEventListener("click" , function(event){
           // console.log(event.target.innerText);
               setNEwLocal("kid" , event)
           });
        }
        
        function setNEwLocal(collectionName , event)
        {
           localStorage.setItem('categoryName',event.target.innerText);
           localStorage.setItem('collectionName', collectionName); // man Or woman Or kid
           localStorage.setItem('linkNum',i);// *9 % 55
           console.log(i);
        }
var ArrOfImages = ["200" , "201" , "202" , "203" , "204" , "205" , "206" , "207" , "208"];
function setArrayImages(){
       collectionName = localStorage.getItem('collectionName');
       categoryName = localStorage.getItem('categoryName')
       var linkNum = 0;
        console.log(collectionName ,categoryName );
        if(collectionName == "woman")
        {

            for(i = 0 ; i < 6;i++)
            {
                if(categoryName == women[i*9].category)
                    linkNum = i;
            }
           
            for(i = 0 ; i < 9 ;i++)
            {
                ArrOfImages[i] = women[linkNum * 9 + i].Id
                console.log(women[linkNum * 9 + i].Id);
            }
        }
        else if (collectionName == "man")
        {
            // checking which category Related
            for(i = 0 ; i < 6;i++)
            {
                if(categoryName.toLowerCase() == men[i*9].category.toLowerCase())
                linkNum = i;
            }
        //    filling image Array 
            for(i = 0 ; i < 9 ;i++)
            {
                ArrOfImages[i] = men[linkNum * 9 + i].Id
                console.log(men[linkNum * 9 + i].Id);
            }
        }
        else {
            // checking which category related
            for(i = 0 ; i < 5;i++)
            {
                if(categoryName == kid[i*9].category)
                linkNum = i;
            }
        //    filling Images Array
            for(i = 0 ; i < 9 ;i++)
            {
                ArrOfImages[i] = kid[linkNum * 9 + i].Id
                console.log(kid[linkNum * 9 + i].Id);
            }
        }
    }
        setArrayImages();  
       
        // console.log(WomenCollection);
        document.getElementById("pageName").innerText = localStorage.getItem("collectionName");
        document.getElementById("pageName2").innerText = localStorage.getItem("collectionName");
        document.getElementsByTagName("title").innerText = localStorage.getItem("collectionName");
        function serchFun(event) {
            searchKey = "";
            searchKey = document.getElementById("search").value;
            console.log(searchKey);
            collectionName = localStorage.getItem('collectionName');
            var linkNum = 0;
            if (collectionName == "woman") {
        
                for (i = 0; i < 6; i++) {
                    let vari = women[i * 9].category;
                    if (vari.toLowerCase().search(searchKey.toLowerCase()) >= 0)
                        linkNum = i;
                }
        
                for (i = 0; i < 9; i++) {
                    ArrOfImages[i] = women[linkNum * 9 + i].Id;
                    console.log(women[linkNum * 9 + i].Id);
                }
            }
            else if (collectionName == "man") {
                // checking which category Related
                for (i = 0; i < 6; i++) {
                    if (men[i * 9].category.toLowerCase().search(searchKey.toLowerCase()) >= 0)
                        linkNum = i;
                }
                //    filling image Array 
                for (i = 0; i < 9; i++) {
                    ArrOfImages[i] = men[linkNum * 9 + i].Id;
                    console.log(men[linkNum * 9 + i].Id);
                }
            }
            else {
                // checking which category related
                for (i = 0; i < 5; i++) {
                    if (kid[i * 9].category.toLowerCase().search(searchKey.toLowerCase()) >= 0)
                        linkNum = i;
                }
                //    filling Images Array
                for (i = 0; i < 9; i++) {
                    ArrOfImages[i] = kid[linkNum * 9 + i].Id;
                    console.log(kid[linkNum * 9 + i].Id);
                }
            }
            var AllImages = document.querySelectorAll(".item img");
        for(i = 0; i < 9;i++)
        {
            console.log(ArrOfImages[i])
         AllImages[i].src = "../images/"+ArrOfImages[i]+".jpg"
        }
        }
        var AllImages = document.querySelectorAll(".item img");
        for(i = 0; i < 9;i++)
        {
            console.log(ArrOfImages[i])
         AllImages[i].src = "../images/"+ArrOfImages[i]+".jpg"
        }
        function setToCar1()
        {
            addingToCartItem(0)
        }
        function setToCar2()
        {
            addingToCartItem(1)
        }
        function setToCar3()
        {
            addingToCartItem(2)
        }
        function setToCar4()
        {
            addingToCartItem(3)
        }
        function setToCar5()
        {
            addingToCartItem(4)
        }
        function setToCar6()
        {
            addingToCartItem(5)
        }
        function setToCar7()
        {
            addingToCartItem(6)
        }
        function setToCar8()
        {
            addingToCartItem(7)
        }
        function setToCar9()
        {
            addingToCartItem(8)
        }
        function addingToCartItem(i)
        {
        retrive = localStorage.getItem("Itemss");
            if(retrive == null)
            {
                console.log(retrive)
                localStorage.setItem("Itemss" ,JSON.stringify([{id:ArrOfImages[parseInt(i)]}]))
            }
            else 
            {
                console.log(retrive)
                obj = JSON.parse(retrive)
                pusher = {id:ArrOfImages[parseInt(i)]}
                console.log(pusher , obj)
               obj.push(pusher)
                console.log(obj[obj.length - 1] , ArrOfImages[parseInt(i)] )
                localStorage.setItem("Itemss" ,JSON.stringify(obj))
            }
    
        }