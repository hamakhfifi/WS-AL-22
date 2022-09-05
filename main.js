algorithm first-algo

var 

c:char;
ph:string;
i,n,j,k:integer; 
begin
ph:=""
while
write("c");
readln( c) ;
ph:= ph+c;
j:=1;
do
c=".";
write (ph) ;
n= length.ph;
for( i=0, i<n,i++)
if (ph[i]=" ")
j:=j+1;
write("number of word=",j);
write(" number of chr",ph.length);
k=0;
for(i=0,i<n,i++)
if (ph[i]=['a','o','i','u,'y','e'])
k:=k+1;
write("number of vowels=",k);
end