var app = app || {};

// dit object bevat de functies om studenten op te halen, etc.
// vanuit dit bestand ga je ook je PHP API lastig vallen met de vraag "mag ik alle studenten"

// wat doet deze regel code?
app.studentsModel = Object.create(eventDispatcher);

app.studentsModel.loadStudents = function() {
    // dit is de functie die de studenten ophaalt bij je PHP pagina
    // als de studenten zijn geladen, dan dispatcht hij een event
    // je view (bijvoorbeeld de randomStudentView) moet luisteren naar dit event
    var req = new XMLHttpRequest();
    // welke url moet er worden opgehaald?
    req.open('GET', 'http://localhost:8888/pro/les09_app/app/models/student.php', true);

    // we voegen een 'listener' toe om te kijken of de pagina geladen is
    req.addEventListener('readystatechange', function () {
        //console.log('readyState: ' + req.readyState);
        if (req.readyState == 4) {
            if(req.status == 200){
                initializePage(req.responseText);
            } else {
                console.log("Error loading page\n");
            }
        }
    });
    // we starten het laden van de pagina
    req.send();

    this.students = [
        {firstName: "Joel", lastName: "Mik", eyeColor: "Blue", gender: "male"},
        {firstName: "Tristan", lastName: "van der Linden", eyeColor: "Blue", gender: "male"},
        {firstName: "Idris", lastName: "Dopica Pena", eyeColor: "Blue", gender: "male"},
        {firstName: "Mike", lastName: "Rhodens", eyeColor: "Blue", gender: "male"},
        {firstName: "Donovan", lastName: "Roubos", eyeColor: "Blue", gender: "male"}
      ];




    this.dispatch("CHANGE"); // deze 'dispatch' pas uitvoeren als je studenten JSON is geladen
};

// welke functies heeft je model nog meer nodig? Maak ze hieronder aan.
app.studentsModel.getRandomStudent = function() {
  var rdStudents = Math.floor(Math.random() * this.students.length);
  return this.students[rdStudents];
};

app.studentsModel.berendTest = function(){
  return this.students[Math.floor(Math.random()*this.students.length)];

}
