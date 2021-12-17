var x=userInput[0];
var y="";
for(var i=0;i<=x;i++){
    for(var j=0;j<i;j++)
    y=y+"*";
    
    y=y+"\n";
}
for(var k=0;k<=x-1;k++){
    for (l=0;l<=x-k-2;l++){
        y=y+"*";
    }
y=y+"\n";
}
        console.log(y);

