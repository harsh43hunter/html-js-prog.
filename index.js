function sumNaturalNumbers() {
    var n = document.getElementById("n").value ;
    var sum = 0;
    var i = 1;
    do { 
        sum +=i ;
        i++ ;

    }while (i <= n);
    document.getElementById("result").innerHTML = "The sum of the first " + n + " natural numbers is " + sum;
}
