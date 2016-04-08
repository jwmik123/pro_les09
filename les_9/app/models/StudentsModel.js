var app = app || {};

// dit object bevat de functies om studenten op te halen, etc.
// vanuit dit bestand ga je ook je PHP API lastig vallen met de vraag "mag ik alle studenten"

// wat doet deze regel code?
app.studentsModel = Object.create(eventDispatcher);

app.studentsModel.loadStudents = function() {
    // dit is de functie die de studenten ophaalt bij je PHP pagina
    // als de studenten zijn geladen, dan dispatcht hij een event
    // je view (bijvoorbeeld de randomStudentView) moet luisteren naar dit event
    //
    // this.dispatch("CHANGE"); // deze 'dispatch' pas uitvoeren als je studenten JSON is geladen

    this.students = [
        {firstName:"Berend", id:0},
        {firstName:"Jelle", id:1},
        {firstName:"Gianni", id:2},
        {firstName:"Joris", id:3}
    ]
};

app.studentsModel.getRandomStudent = function(){
    var rdIndex = Math.floor(Math.random() * this.students.length);
    return this.students[rdIndex];
}


// welke functies heeft je model nog meer nodig? Maak ze hieronder aan.