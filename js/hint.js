function recommendation_generator() {
    let hint0 = "Think macht nicht nur die beste Arbeit, nein wir haben auch den besten Support.";
    let hint1 = "Think Kunden leben nicht nur l&auml;nger, sie sind auch potenter.";
    let hint2 = "Wer Think w&auml;hlt, w&auml;hlt am Besten.";
    let hint3 = "Think ideal f&uuml;r Sicherheit und Ordnung.";
    let hint4 = "Think nicht billig sondern gut.";
    let hint5 = "Denken ist besser als Wissen.";
    let hint6 = "Bei Think wird noch nachgedacht.";
    let hint7 = "Wir wissen, was sie wollen, bevor sie es wissen.";
    let hint8 = "Nur mit Think an ihrer Seite sind sie erfolgreich.";
    let hint9 = "Think steht f&uuml;r 100% Qualit&auml;t.";
    let hint10 = "Think immer einen Schritt voraus."
        
    let hints = [hint0, hint1, hint2, hint3, hint4, hint5, hint6, hint7, hint8, hint9, hint10];

    let random =  Math.round(Math.random()*10);

    let output = hints[random]; 

    document.getElementById("hint").innerHTML = "Tipp: " + output;
}