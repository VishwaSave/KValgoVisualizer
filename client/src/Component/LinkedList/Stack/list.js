const array=[]
let i,a=parseInt(Math.random()*10);
let b=(a>=3)? a:5
for(i=0;i<b;i++){
    array[i]=parseInt(Math.floor(Math.random() * 199) - 99);
}
export const defaultlist=array;