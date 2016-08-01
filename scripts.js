
function sumFibs(num) {
  var total=0;
  var myArr=[1,1];
    for (var i = 1; i < num; i++) {
      var temp=myArr[i]+myArr[i-1];
      if(temp<=num)
      {
        myArr.push(temp);
      }
    }
    var result=myArr.filter(retunrOdd);
    result.forEach(function(n){
    total+=n;
    return total;
    }
);
    return total;
}

function retunrOdd(n){
    return n%2===1;
}

sumFibs(4);
sumFibs(75025);
