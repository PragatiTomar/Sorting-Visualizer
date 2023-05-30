const IS = (array, position, arraySteps, colorSteps) => {
    let colorkey = colorSteps[colorSteps.length -1].slice();
    let i,j,key;
    for(i=1; i<array.length; i++){
        key=array[i];
        j=i-1;
        while(j>=0 && array[j]> key){
            array[j+1]= array[j];
            arraySteps.push(array.slice());
            colorkey[i] =3;
            if(i===j+1){
                colorkey[j+1] =3;

            }else{
                colorkey[j+1] =1;
            }

            colorkey[j] =1;
            colorSteps.push(colorkey.slice());
            colorkey[j+1]=0;
            colorkey[i]=0;
            colorkey[j]=0;
            j=j-1;
        }
        array[j+1]=key;
        arraySteps.push(array.slice());
        colorSteps.push(colorkey.slice());
    }
    colorSteps[colorSteps.length-1] = new Array (array.length).fill(2);
}
export default IS;