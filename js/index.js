var objetivo;
var pregunta;
var preguntas = [a,b,c,d,e,f];
var random = () => {
    return Math.floor(Math.random());
}

function setLocal(pregunta, preguntas, objetivo) {

    localStorage.setItem("vidas", 4);
    localStorage.setItem("preguntas", preguntas);
    localStorage.setItem("pregunta", pregunta);
    localStorage.setItem("objetivo", objetivo);
    localStorage.setItem("respuestasCorrectas", 0);
    localStorage.setItem("respuestasIncorrectas", 0);
    localStorage.setItem("minutos", 0);
    localStorage.setItem("segundos", 0);
}


document.getElementById("html").addEventListener("click", function() {
    objetivo = 1;
    let pregunta = random();
    preguntas.splice(pregunta-1, 1);
    setLocal(pregunta, preguntas, objetivo);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + pregunta + ".html";
});
document.getElementById("css").addEventListener("click", function() {
    objetivo = 2;
    let pregunta = random();
    preguntas.splice(pregunta-1, 1);
    setLocal(pregunta, preguntas, objetivo);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + pregunta + ".html";
});
document.getElementById("js").addEventListener("click", function() {
    objetivo = 3;
    let pregunta = random();
    preguntas.splice(pregunta-1, 1);
    setLocal(pregunta, preguntas, objetivo);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + pregunta + ".html";
});