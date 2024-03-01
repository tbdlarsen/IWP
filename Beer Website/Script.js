function print_status(){

    let beer_ale = document.querySelector('#ferment_ale');
    let beer_lager = document.querySelector('#ferment_lager');
    let beer_wild = document.querySelector('#ferment_wild');

    let beers = [beer_ale,beer_lager,beer_wild];
   
    for(i = 0; i< beers.length;i++){
        if(beers[i].value){
        let beer_name = beers[i].value;
        console.log(beer_name);
        }else{
            console.log("fejl");
        }

    }

}

print_status();




    










