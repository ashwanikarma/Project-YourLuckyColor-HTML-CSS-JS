const zodiac = document.getElementById("zodiac");

const body = document.body;


const changeBackground = () => {

    //console.log(zodiac.value);
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="Red";
        break;
        
        case "tarus":
            body.style.backgroundColor="blue";
        break;
        case "gemini":
            body.style.backgroundColor="green";
        break;
        case "cancer":
            body.style.backgroundColor="yellow";
        break;
        case "leo":
            body.style.backgroundColor="violet";
        break;
        case "virgo":
            body.style.backgroundColor="pink";
        break;
        case "libra":
            body.style.backgroundColor="black";
        break;
        case "scorpio":
            body.style.backgroundColor="grey";
        break;
        case "sagittarius":
            body.style.backgroundColor="wheat";
        break;
        case "aquarius":
            body.style.backgroundColor="indigo";
        break;
        case "capricorn":
            body.style.backgroundColor="orange";
        break;
        case "pisces":
            body.style.backgroundColor="navy";
        break;
        default:
            break;
    }
};  