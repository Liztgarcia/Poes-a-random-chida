function GetValue() {
    var mensajes = new Array(
      "¡Never feel guilty for starting again! -Rupi Kaur",
      "¡Together we are an endless conversation!-Rupi Kaur",
      "¡I learned everything is temporary.moments.feelings.people.flowers!",
      "¡To hate is an easy lazy thing but to love takes strenght everyone has but not all are willing to practice!",
      "¡Trust your body it reacts to right and wrong better than your mind does!",
      "¡You deserve the better!",
      "¡You´re awesome!",
      "¡You are enough!",
      "One day at time",
      "If you need start again, don´t worry"
    );
    var random = mensajes[Math.floor(Math.random() * mensajes.length)];
    //alert(random);
    document.getElementById("mensajerandom").innerHTML = random;
    document.getElementById("mensajerandom").style.color = "#739c72";
  }
