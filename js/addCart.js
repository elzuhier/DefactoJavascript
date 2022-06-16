  //////header && foooter ////
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
 
function createAnItem(){
var item = localStorage.getItem("Itemss");
items = JSON.parse(item)
for(i = 0;i < items.length;i++)
{
    itemId = items[i].id 
    IDIn = parseInt(itemId)
    if( IDIn >= 100 && IDIn < 200)
    {
        makeIt(men[IDIn - 100].id ,men[IDIn - 100].price) 
    }
}
}
function makeIt(imgSrc , Price)
{
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('maindiv')
   console.log(cartItems)
    cartRow.classList.add('cart-item')

    var cartRowContents = `
    <div class="imgDiv">
    <img src="../images/${imgSrc}.jpg" alt="Blouse">
  </div>
  <div class="linkdiv">
    <a href="" class="pieceName">Regular Fit Christmas Themed V-Neck Rope Strap Sequined Blouse</a>
    <span class="colorItem">black</span>
      <span class="icons">
      <span class="iconRemove">
      <i class="far fa-times-circle"></i>
      <span>Remove</span>
    </span>
    <span>&nbsp; | &nbsp;</span>
    <span class="iconFavorite">
      <i class="far fa-heart"></i>
      <span>Move to My Favorate List</span>
    </span>
  </span>
</div>
<div class="rightItems">
  <span class="size">XL</span>
      <span class="price"> <b> ${Price} EGP </b></span>
    </div>`
  
    cartRow.innerHTML = cartRowContents;
    console.log(cartRow)
    document.getElementsByClassName("maindiv")[0].appendChild(cartRow)
}
createAnItem()
  // var itm = document.getElementsByClassName("cart-item")
    // console.log(itm)
    // var cln = itm.cloneNode(true);
    // document.getElementById("mainDivConta").appendChild(cln);