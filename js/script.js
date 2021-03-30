// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

// Funzione calculateButton click
var calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener ( 'click', function() {
    // Creare un alert se si lascia il nome vuoto
    // Prendere il valore del nome inserito dall'utente in burger-name
    var burgerNameElement = document.getElementById('burger-name');
    var burgerName = burgerNameElement.value;

    if ( burgerName == '' ) {
        alert('Give your burger a name!');
    } else {
        // Calcolare il prezzo dell'hamburger sommando al prezzo base il costo di ogni elemento che risulta checked
        // Selezionare tutte le checkbox utilizzando la classe burger-ingredient
        var burgerIngredientCheckbox = document.getElementsByClassName('burger-ingredient');

        // Fare un ciclo for per verificare se le checkbox sono checked e quale value hanno, se sono checked sommare il value al prezzo base
        var burgerPrice = 50;
        
        for ( var i = 0; i < burgerIngredientCheckbox.length; i++ ) {
            var thisCheckbox = burgerIngredientCheckbox[i];

            if ( thisCheckbox.checked === true ) {
                var thisPrice = parseInt(thisCheckbox.value);
                burgerPrice += thisPrice;
            }
        }

        // Verificare se il coupon inserito dall'utente è valido, se è valido calcolare lo sconto del 10%
        // Creare un array con codici coupon
        var couponList = ['74692SNTUFG', '83746MSNFHY', '92673GTSJDO', '19264ICUANE'];

        // Prendere il valore del coupon inserito dall'utente
        var couponUtenteElement = document.getElementById('burger-discount');
        var couponUtente = couponUtenteElement.value;

        // Cerco il coupon inserito dall'utente nell'array, se è presente applico lo sconto del 10%
        var couponTrovato = couponList.includes(couponUtente);

        if ( couponTrovato == true ) {
            burgerPrice = burgerPrice - (burgerPrice * 0.1);
        }

        // Stampare il prezzo
        document.getElementById('price').innerHTML = burgerPrice.toFixed(2) + ' €';
    }
} );