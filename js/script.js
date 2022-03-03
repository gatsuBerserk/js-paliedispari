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
                   
            const userWord= prompt( "Pari o dispari?"); 
            console.log(userWord);
            const userNumber= parseInt(prompt("Inserisci un numero da 1 a 5"));
            console.log(userNumber)
            if ((userNumber > 5) || (isNaN(userNumber))){
             console.error("inserisci correttamente i dati");
            }; 
            // 2) generare un numero random per il pc  
            // numero random
                // Funzione per numeri random
                function randomNumber (min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                };
                // Variabile da associare alla funzione ( nelle parentesi segliamo il range di numeri)
                const pcRandomNumber= randomNumber(1, 5);  

                console.log(pcRandomNumber + " " + "numero pc");

            // 3) sommare Il  numero scelto dall'utente con il numero random del pc 

            // 4) verificare se la somma è pari o dispari 

            // 5) Comparare la verifica della somma con la scelta dell'utente(pari o dispari)
                

            
