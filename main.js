let rate=[200,300,500,700,1000,1200,950,800,550,650,-300];
document.write(rate +"<br>");
let a=rate.filter(function(prices){
    return prices>=500 && prices<=1000;
});
document.write(a);