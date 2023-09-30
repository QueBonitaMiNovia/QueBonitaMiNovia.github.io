const choices = ["mia", "otto", "arca", "baby e bebesita", "gato", "mini patata", "patati", "phon", "mini patato", "bambina coreana"];

const outcomes = {
    "mia": {
        "otto": "draw",
        "arca": "win",
        "baby e bebesita": "win",
        "bambina coreana": "win",
        "gato": "lose",
        "mini patata": "lose",
        "patati": "lose",
        "phon": "lose",
        "mini patato": "lose",
    },
    "otto": {
        "mia": "draw",
        "gato": "win",
        "mini patato": "win",
        "phon": "win",
        "arca": "win",
        "baby e bebesita": "lose",
        "mini patata": "lose",
        "patati": "lose",
        "bambina coreana": "lose",
    },
    "arca": {
        "gato": "win",
        "phon": "win",
        "baby e bebesita": "win",
        "mini patata": "lose",
        "patati": "lose",
        "mini patato": "lose",
        "bambina coreana": "lose",
        "mia": "lose",
        "otto": "lose",
    },
    "baby e bebesita": {
        "otto": "win",
        "bambina coreana": "win",
        "gato": "lose",
        "mini patata": "lose",
        "mia": "lose",
        "arca": "lose",
        "phon": "lose",
        "mini patato": "lose",
        "patati": "lose",
    },
    "gato": {
        "mia": "win",
        "baby e bebesita": "win",
        "mini patata": "lose",
        "phon": "win",
        "otto": "lose",
        "arca": "lose",
        "patati": "lose",
        "mini patato": "lose",
        "bambina coreana": "lose",
    },
    "mini patata": {
        "mini patato": "draw",
        "patati": "draw",
        "gato": "win",
        "mia": "win",
        "otto": "win",
        "arca": "win",
        "baby e bebesita": "win",
        "bambina coreana": "win",
        "phon": "lose",

    },
    "patati": {
        "mini patato": "draw",
        "mini patata": "draw",
        "otto": "win",
        "phon": "win",
        "arca": "win",
        "baby e bebesita": "win",
        "gato": "win",
        "mia": "win",
        "bambina coreana": "lose",
    },
    "phon": {
        "mia": "win",
        "baby e bebesita": "win",
        "mini patato": "win",
        "mini patata": "win",
        "gato": "lose",
        "otto": "lose",
        "arca": "lose",
        "patati": "lose",
        "bambina coreana": "lose",
    },
    "mini patato": {
        "patati": "draw",
        "mini patata": "draw",
        "gato": "win",
        "baby e bebesita": "win",
        "mia": "win",
        "arca": "win",
        "bambina coreana": "win",
        "phon": "lose",
        "otto": "lose",
    },
    "bambina coreana": {
        "otto": "win",
        "gato": "win",
        "phon": "win",
        "arca": "win",
        "patati": "win",
        "baby e bebesita": "lose",
        "mini patata": "lose",
        "mini patato": "lose",
        "mia": "lose",
    },
};

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function isDraw(player, computer) {
    return (player === computer) || (outcomes[player] && outcomes[player][computer] === "draw");
}

function play(playerSelection) {
    const computerSelection = computerChoice();
    let result = "";

    const outcome = outcomes[playerSelection] && outcomes[playerSelection][computerSelection];

       if (isDraw(playerSelection, computerSelection)) {
        result = getDrawText(playerSelection, computerSelection);
    } else if (outcomes[playerSelection] && outcomes[playerSelection][computerSelection] === "win") {
        result = getWinText(playerSelection, computerSelection);
    } else {
        result = getLoseText(playerSelection, computerSelection);
    }
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Hai scelto ${playerSelection}, il computer ha scelto ${computerSelection}. ${result}`;
}

function play(playerSelection) {
    const computerSelection = computerChoice();
    let result = "";

    const outcome = outcomes[playerSelection] && outcomes[playerSelection][computerSelection];

    const playerImage = document.getElementById("playerImage");
    const computerImage = document.getElementById("computerImage");
    const resultText = document.getElementById("resultText");

    playerImage.src = `img/${playerSelection}.jpg`;
    computerImage.src = `img/${computerSelection}.jpg`;

    if (isDraw(playerSelection, computerSelection)) {
        result = getDrawText(playerSelection, computerSelection);
        resultText.style.color = "black"; // Colore del testo per il pareggio
    } else if (outcomes[playerSelection] && outcomes[playerSelection][computerSelection] === "win") {
        result = getWinText(playerSelection, computerSelection);
        resultText.style.color = "green"; // Colore del testo per la vittoria
    } else {
        result = getLoseText(playerSelection, computerSelection);
        resultText.style.color = "red"; // Colore del testo per la sconfitta
    }

    resultText.textContent = result;
}

function getDrawText(player, computer) {
    switch (player) {
        case "mia":
            switch (computer) {
                case "mia":
                    return "Pareggio! Le due Mia si addormentano mentre combattono";
                case "otto":
                    return "Pareggio! Otto e Mia sono due gattini patatini e nessuno vince.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "otto":
            switch (computer) {
                case "otto":
                    return "Pareggio! I due otto si addormentano mentre combattono";
                case "mia":
                    return "Pareggio! Otto e Mia sono due gattini patatini e nessuno vince.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "arca":
            switch (computer) {
                case "arca":
                    return "Pareggio! Arca e arca fanno cosplay insieme e vivono felici e contenti.";
            }
        case "baby e bebesita":
            switch (computer) {
                case "baby e bebesita":
                    return "Pareggio! Le due baby e i due bebesiti fanno amicizia e vivono felici e contenti.";
               
            }
        case "gato":
            switch (computer) {
                case "gato":
                    return "Pareggio! I due gati i sparano a vicenda.";
            }
         case "mini patata":
            switch (computer) {
                case "mini patata":
                    return "Pareggio! si mangiano a vincenda.";
                case "mini patato":
                    return "Pareggio! i mini patati si mangiano a vincenda.";
                case "patati":
                    return "Pareggio! i patati si mangiano a vincenda.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "patati":
                switch (computer) {
                    case "mini patata":
                        return "Pareggio! si mangiano a vincenda.";
                    case "mini patato":
                        return "Pareggio! i mini patati si mangiano a vincenda.";
                    case "patati":
                        return "Pareggio! i patati si mangiano a vincenda.";
                    default:
                        return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
                }
        case "phon":
            switch (computer) {
                case "phon":
                    return "Pareggio! I due phon si sciolgono a vicenda.";
            }
        case "mini patato":
            switch (computer) {
                case "mini patato":
                    return "Pareggio! i mini patati si mangiano a vincenda.";
                case "mini patata":
                    return "Pareggio! si mangiano a vincenda.";
                case "patati":
                    return "Pareggio! i patati si mangiano a vincenda.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "bambina coreana":
            switch (computer) {
                case "bambina coreana":
                    return "Pareggio! Fanno la faccine patatina a vicenda.";
            }
        default:
            return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
    }
}


function getWinText(player, computer) {
    switch (player) {
        case "mia":
            switch (computer) {
                case "arca":
                    return "Hai vinto! Arca ha abbassato la guardia ed è stata mangiata.";
                case "baby e bebesita":
                    return "Hai vinto! Mia ha scambiato Baby e Bebesita per giocattoli e li ha distrutti.";
                case "bambina coreana":
                    return "Hai vinto! Mia è fedele solo a una patata e sconfigge la Bambina Coreana.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "otto":
            switch (computer) {
                case "arca":
                    return "Hai vinto! Otto fa finta di dormire e mangia arca.";
                case "gato":
                    return "Hai vinto! Otto guarda male Gato e si arrende.";
                case "mini patato":
                    return "Hai vinto! Otto è geloso di Mini Patato e lo sconfigge.";
                case "phon":
                    return "Hai vinto! Otto mangiucchia il filo del Phon.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "arca":
            switch (computer) {
                case "gato":
                    return "Hai vinto! Arca crea un buco nero e vince contro gato.";
                case "baby e bebesita":
                    return "Hai vinto! Arca scambia baby e bebesita come figure e ci gioca.";
                case "phon":
                    return "Hai vinto! Arca usa il phon in maniera....";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "baby e bebesita":
            switch (computer) {
                case "otto":
                    return "Hai Vinto! Baby e Bebesita collaborano e sconfiggono Otto.";
                case "bambina coreana":
                    return "Hai vinto! La bambina coreana pensa che siano giochi e non li prende seriamente.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "gato":
            switch (computer) {
                case "mia":
                    return "Hai vinto! Mia si spaventa e va via.";
               case "baby e bebesita":
                    return "Hai vinto! Gato spara.";
                case "phon":
                    return "Hai vinto! Una pistola contro un phon?";
            }
        case "mini patata":
            switch (computer) {
                case "mia":
                    return "Hai Vinto! Mini Patata gioca con Mia.";
                case "otto":
                    return "Hai vinto! Otto non vuole combattere la sua patata, si arrende.";
                case "arca":
                    return "Hai vinto! La patata è semplicemente troppo forte.";
                case "baby e bebesita":
                    return "Hai vinto! mini patata gioca con baby e bebesita.";
                case "gato":
                    return "Hai Vinto! gato non ha il coraggio a sparare a mini patata.";
                case "bambina coreana":
                    return "Hai vinto! mini patata >>> .";
            }
        case "patati":
            switch (computer) {
                case "mia":
                    return "Hai Vinto! I Patati giocano con Mia.";
                case "otto":
                    return "Hai Vinto! Otto non vuole coinvolgere la sua patata, si arrende.";
                case "arca":
                    return "Hai Vinto! Otto non vuole coinvolgere la sua patata, si arrende.";
                case "gato":
                    return "Hai Vinto! gato non ha il coraggio a sparare ai patati.";
                case "phon":
                    return "Hai Vinto! I patati usano il phon...";
                case "baby e bebesita":
                    return "Hai Vinto! I patati giocano con baby e bebesita.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "phon":
            switch (computer) {
                case "mia":
                    return "Hai vinto! L'aria calda del Phon fanno venire sonno a mia";
                case "baby e bebesita":
                    return "Hai vinto! il Phon scioglie baby e bebesita.";
                case "mini patato":
                    return "Hai vinto! Per ora non sa ancora usarlo bene...";
                case "mini patata":
                    return "Hai vinto! Lo lascia usare a ciollo...";
                case "gato":
                    return "Hai vinto! Il phon spavento gato...";
            }
        case "mini patato":
            switch (computer) {
                 case "gato":
                    return "Hai Vinto! Gato non ha il coraggio a sparare a mini patato.";
                case "baby e bebesita":
                    return "Hai Vinto! Mini patato gioca con baby e bebesita.";
                case "mia":
                    return "Hai Vinto! Mini Patato gioca con Mia.";
                case "arca":
                    return "Hai Vinto! Si, sono egocentrico. ";
                case "bambina coreana":
                    return "Hai Vinto! io > .";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "bambina coreana":
            switch (computer) {
                case "otto":
                    return "Hai Vinto! La Bambina Coreana è troppo stefany mood per Otto, si arrende.";
                case "gato":
                    return "Hai Vinto! gato non ha il coraggio a sparare alla bambina coreana.";
                case "phon":
                    return "Hai Vinto! La bambina coreana gioca con il phon.";
                case "arca":
                    return "Hai Vinto! Arca viene arrestato.";
                case "patati":
                    return "Hai Vinto! La bambina coreana li scambia per pupazzi e ci gioca.";
            }
        default:
            return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...

    }
}

function getLoseText(player, computer) {
    switch (player) {
        case "mia":
            switch (computer) {
                case "gato":
                    return "Hai perso! Gato spara a Mia.";
                case "mini patata":
                    return "Hai perso! Mini Patata gioca con Mia.";
                case "mini patato":
                    return "Hai perso! Mini Patato gioca con Mia.";
                case "patati":
                    return "Hai perso! I Patati giocano con Mia.";
                case "phon":
                    return "Hai perso! L'aria calda del Phon non fa avvicinare Mia, si annoia e se ne va";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "otto":
            switch (computer) {
                case "baby e bebesita":
                    return "Hai perso! Baby e Bebesita collaborano e sconfiggono Otto.";
                case "mini patata":
                    return "Hai perso! Otto non vuole combattere la sua patata, si arrende.";
                case "patati":
                    return "Hai perso! Otto non vuole coinvolgere la sua patata, si arrende.";
                case "bambina coreana":
                    return "Hai perso! La Bambina Coreana è troppo stefany mood per Otto, si arrende.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "arca":
            switch (computer) {
                case "mia":
                    return "Hai perso! Mia sbrana arca.";
                case "otto":
                    return "Hai perso! Otto guarda male arca che piange.";
                case "mini patata":
                    return "Hai perso! La patata è semplicemente troppo forte.";
                case "patati":
                    return "Hai perso! patati >>> ";
                case "mini patato":
                    return "Hai perso! Si, sono egocentrico. ";
                case "bambina coreana":
                    return "Hai perso! Arca viene arrestato.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "baby e bebesita":
            switch (computer) {
                case "mia":
                    return "Hai Perso! Mia gioca con Baby e Bebesita come delle palle di filo.";
                case "arca":
                    return "Hai perso! Arca usa baby e bebesita come delle barbie.";
                case "gato":
                    return "Hai perso! gato spara.";
                case "mini patata":
                    return "Hai perso! mini patata gioca con baby e bebesita.";
                case "phon":
                    return "Hai perso! il Phon scioglie baby e bebesita.";
                case "mini patato":
                    return "Hai perso! mini patato gioca con baby e bebesita.";
                case "patati":
                    return "Hai perso! i patati giocano con baby e bebesita.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "gato":
            switch (computer) {
              case "otto":
                    return "Hai perso! Otto guarda male Gato e si arrende.";
               case "arca":
                    return "Hai perso! Arca pensa che sia una pistola giocattolo e perde.";
                case "mini patata":
                    return "Hai perso! gato non ha il coraggio a sparare a mini patata.";
                case "patati":
                    return "Hai perso! gato non ha il coraggio a sparare ai patati.";
                case "mini patato":
                    return "Hai perso! gato non ha il coraggio a sparare a mini patato.";
                case "bambina coreana":
                    return "Hai perso! gato non ha il coraggio a sparare alla bambina coreana.";
            }
        case "mini patata":
            switch (computer) {
                case "phon":
                    return "Hai perso! Lo lascia usare a ciollo...";
            }
        case "patati":
            switch (computer) {
                case "bambina coreana":
                    return "Hai perso! La bambina coreana li scambia per pupazzi e ci gioca.";
            } 
        case "phon":
            switch (computer) {
                case "otto":
                    return "Hai perso! Otto mangiucchia il filo del Phon.";
                case "arca":
                    return "Hai perso! Non si sa dove arca abbia messo il phon...";
                case "gato":
                    return "Hai perso! Una pistola contro un phon?";
                case "patati":
                    return "Hai perso! I patati usano il phon...";
                case "bambina coreana":
                    return "Hai perso! La bambina coreana gioca con il phon.";
        }
        case "mini patato":
            switch (computer) {
                case "phon":
                    return "Hai Perso! Per ora non sa ancora usarlo bene...";
                case "otto":
                    return "Hai Perso! Otto è geloso di Mini Patato e lo sconfigge.";
                default:
                    return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
            }
        case "bambina coreana":
            switch (computer) {
                 case "baby e bebesita":
                    return "Hai Perso! La bambina coreana pensa che siano giochi e non li prende seriamente.";
                case "mini patata":
                    return "Hai Perso! mini patata >>> .";
                case "mini patato":
                    return "Hai Perso! io > .";
                case "mia":
                    return "Hai Perso! Mia è fedele solo a una patata e sconfigge la Bambina Coreana.";
            }
        default:
            return "se leggi questa scritta sono un ritardato perchè ho lasciato degli errori nel codice"; // Aggiungi altre casistiche qui...
    }
}


document.getElementById("miaButton").addEventListener("click", () => play("mia"));
document.getElementById("ottoButton").addEventListener("click", () => play("otto"));
document.getElementById("arcaButton").addEventListener("click", () => play("arca"));
document.getElementById("babyebebesitaButton").addEventListener("click", () => play("baby e bebesita"));
document.getElementById("gatoButton").addEventListener("click", () => play("gato"));
document.getElementById("miniPatataButton").addEventListener("click", () => play("mini patata"));
document.getElementById("patatiButton").addEventListener("click", () => play("patati"));
document.getElementById("phonButton").addEventListener("click", () => play("phon"));
document.getElementById("miniPatatoButton").addEventListener("click", () => play("mini patato"));
document.getElementById("bambinaCoreanaButton").addEventListener("click", () => play("bambina coreana"));
