


const search = document.querySelector('.search');
search.addEventListener('click' , function(){  
getWord();
})

async function getWord(){
    const user_input = document.getElementById('search').value;
    let api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + user_input;
    const response = await fetch(api_url);
    const data = await response.json();

    //---------word--------

    
    const words = data[0].word;
    const word = document.querySelector('.Word');
    word.innerHTML = words;

    //-------Phonetics------

   
    const Phon = data[0].phonetics[0].text;
    const Fonetics = document.querySelector('.Phonetics');
    Fonetics.innerHTML =  Phon;
    


    //-------meanings------
    const meaning = data[0].meanings[0].definitions[0].definition;
    
    const Definition = document.querySelector('.Definition');
    Definition.innerHTML = "Definition: " + meaning;

    //---------synonoms-----

    const one_synonoms = data[0].meanings[0].synonyms[0];
    const two_synonoms = data[0].meanings[0].synonyms[1];
    if(one_synonoms == undefined && two_synonoms == undefined){
    
     const temp = data[0].meanings[1].synonyms[0];
     const temp1 = data[0].meanings[1].synonyms[1]

    const alike =  document.querySelector('.Synonyms');
    alike.innerHTML = "Synonyms: " + temp + " ; " +  temp1;
    } 
        else {

    const alike =  document.querySelector('.Synonyms');
    alike.innerHTML = "Synonyms: " + one_synonoms + " ; "  + two_synonoms;
    }
    








    
}



