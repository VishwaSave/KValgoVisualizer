const array=[]
let i,a=parseInt(Math.random()*15);
let b=(a>=3)? a:5
for(i=0;i<b;i++){
    array[i]=parseInt((Math.random()*10000)-1)
}
export const defaultarr=array;