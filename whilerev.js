var n=634
var rev=0
var r
while (n!=0) {
    r=n%10
    rev=rev*10+r
    n=n/10
}
console.log(rev)