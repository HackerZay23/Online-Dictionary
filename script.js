




//let api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + user_input;

const search = document.querySelector('.search');
search.addEventListener('click' , function(){  
getWord();
})

async function getWord(){
    const user_input = document.getElementById('search').value;
    let api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + user_input;
    console.log(user_input);
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data[0]);

    //---------word--------

    console.log(data[0].word);
    const words = data[0].word;
    const word = document.querySelector('.Word');
    word.innerHTML = words;

    //-------Phonetics------

    console.log(data[0].phonetics[0].text);
    const Phon = data[0].phonetics[0].text;
    const Fonetics = document.querySelector('.Phonetics');
    Fonetics.innerHTML =  Phon;
    console.log(Phon);


    //-------meanings------
    const meaning = data[0].meanings[0].definitions[0].definition;
    console.log(meaning);
    const Definition = document.querySelector('.Definition');
    Definition.innerHTML = "Definition: " + meaning;

    //---------synonoms-----

    console.log(data[0].meanings[0].synonyms[0]);
    const one_synonoms = data[0].meanings[0].synonyms[0];
    const two_synonoms = data[0].meanings[0].synonyms[1]
    const alike =  document.querySelector('.Synonyms');
    alike.innerHTML = "Synonyms: " + one_synonoms + " , "  + two_synonoms;
    
}



/*meanings
: 
Array(3)
0
: 
antonyms
: 
[]
definitions
: 
Array(1)
0
: 
{definition: '"Hello!" or an equivalent greeting.', synonyms: Array(0), antonyms: Array(0)}
length
: 
1
*/