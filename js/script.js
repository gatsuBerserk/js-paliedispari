/**
    * Palidroma:
        Chiedere all’utente di inserire una parola
        Creare una funzione per capire se la parola inserita è palindroma
*/ 
    // Chiedere all'utente di inserire una parola
    const parolaUtente= prompt("inserisci una parola");
    console.log(parolaUtente);
    
    // Creare una funzione per capire se la parola inserita è palindroma
        
    // Utilizziamo la risoluzione con true o false 
        function isPalindrome (parola){
            // Potremmo aiutarci con gli array e usare "Array.from()" in quanto ci restituisce un Array iterabile (Fonte MDN) 
                const parolaArray= Array.from(parola); 
                
            // Utiliziamo un'altro metodo degli array  ".reverse" in qunato ci restituisce un array con gli elementi in ordine invertito (Fonte MDN)
                const parolaReverse= parolaArray.reverse();
            
            // Utilizziamo un'altro metodo degli array join() in modo da concatenare tutti gli elementi dell'array (Fonte MDN)    
                const parolaUnita = parolaReverse.join("");
            
                // Creiamo la condizione di verifica
                if (parola === parolaUnita){
                   console.log("è palindroma")
                    return true;
                }else{
                    console.log("non è palindroma")
                    return false;
                   
                }
        };
    console.log(isPalindrome(parolaUtente));
        




/**
    * Pari e Dispari
        L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
        Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        Sommiamo i due numeri
        Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        Dichiariamo chi ha vinto.
*/

        // Prompt Utente
        // const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5;"))
        // console.log(numeroUtente);