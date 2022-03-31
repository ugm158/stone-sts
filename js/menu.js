/** */
let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;

let m = '';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';
// 取得 DOM 的節點
 let menu = document.getElementById('menu');
//
// menu.innerHTML = menuHtml;
// html 寫入節點
let menuData = [
    {
        title: '首頁',
        url: 'index.html'
    },
    {
        title: '關於我們',
        url: 'about.html'
    },
    {
        title: '產品展示',
        url: 'products.html'
    },
    {
        title: '外帶專區',
        url: 'store.html'
    },
    {
        title: '聯絡我們',
        url: 'test.html'
    },
];

//**
menuHtml = menuHtml + `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>`;

//**
menuHtml = '';
for(let row of menuData){
   menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>\n`;

   console.log(menuHtml);
}
menu.innerHTML = menuHtml;//將 HTML 寫入節點
$(document).ready(function(){
    var slideShow=$(".slideShow"), //獲取最外層框架的名稱
    ul=slideShow.find("ul"),
    showNumber=slideShow.find(".showNav span"),//獲取按鈕
    oneWidth=slideShow.find("ul li").eq(0).width(); //獲取每個圖片的寬度
    var timer=null; //定時器返回值，主要用於關閉定時器
    var iNow=0; //iNow為正在展示的圖片索引值，當使用者開啟網頁時首先顯示第一張圖，即索引值為0
    showNumber.on("click",function(){  //為每個按鈕繫結一個點選事件
    $(this).addClass("active").siblings().removeClass("active"); //按鈕點選時為這個按鈕新增高亮狀態，並且將其他按鈕高亮狀態去掉
    var index=$(this).index(); //獲取哪個按鈕被點選，也就是找到被點選按鈕的索引值
    iNow=index;
    ul.animate({
    "left":-oneWidth*iNow, //注意此處用到left屬性，所以ul的樣式裡面需要設定position: relative; 讓ul左移N個圖片大小的寬度，N根據被點選的按鈕索引值iNOWx確定
    })
    });
    timer=setInterval(function(){ //開啟定時器
    iNow  ;    //讓圖片的索引值次序加1，這樣就可以實現順序輪播圖片
    if(iNow>showNumber.length-1){ //當到達最後一張圖的時候，讓iNow賦值為第一張圖的索引值，輪播效果跳轉到第一張圖重新開始
    iNow=0;
    }
    showNumber.eq(iNow).trigger("click"); //模擬觸發數字按鈕的click
    },2000); //2000為輪播的時間
    })