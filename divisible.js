for( let i=1; i <= 30; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('three+five dividables');
    }
    else if( i % 3 == 0){
        console.log('three dividable');
    }else if( i % 5 == 0){
        console.log('Five dividable');
    }

         else{

        console.log(i);
    }
}