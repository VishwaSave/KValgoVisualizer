const array=[],arrlen=[];
let i,a=parseInt(Math.random()*10);
let b=(a>=3)? a:5
let c=parseInt(Math.floor(Math.random()*7)+10);
for(i=0;i<c;i++){
    arrlen[i]=i;
}
for(i=0;i<b;i++){
    array[i]=parseInt(Math.random()*100)
}
export const defaultarr=array;
export const defaultarrlen=arrlen;