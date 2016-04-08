
var app = app || {};

// maak hier een app.randomStudentView object
// dit object is je koppeling met je html om random studenten te kunnen laten zien
// als je op shuffle klikt, dan moet dit script dit afvangen en actie ondernemen
// om bij de model iets op te halen

app.randomStudentsView = {

    // onze init functie voeren we 1x uit
    // deze functie initialiseert alles
    init: function(model){

        this.model = model;

        // Grab the template script from the dom
        var templateSrc = document.querySelector("#students-template").innerHTML;

        this.template = Handlebars.compile(templateSrc);
        this.container = document.querySelector("#student-list");
        this.shuffleButton = document.querySelector("#shuffle");

        // deze data moet UIT de view gehaald worden
        // jullie hebben je data in studentsModel.js staan!
        var testData = {
          students: [
              {firstName:"Gianni", id:0, height:1.86},
              {firstName:"Luuk", id:1, height:1.86},
              {firstName:"Joris", id:2, height:1.86},
              {firstName:"Anton", id:3, height:1.86}
          ]
        }

        // Transform the HTML template into a 'real' template
        // this.render(testData);

        // de functie bind() zorgt ervoor dat je kunt vastzetten waar 'this' naar verwijst
        this.shuffleButton.addEventListener("click", this.shuffleStudent.bind(this));
        this.model.addListener("CHANGE", this.shuffleStudent.bind(this));
        this.container.addEventListener("click", this.studentClicked.bind(this));
    },

    render:function(data){
        this.container.innerHTML = this.template(data);
    },

    shuffleStudent: function(e){
        // haal een random student op bij de model
        // en gebruik this.template() om vervolgens de template te updaten
        console.log('change is waarschijnlijk aangeroepen');

        var student = this.model.berendTest();
        // we moeten bij de student een functie aanroepen om een randomstudent op te halen (bijvoorbeeld getRandomStudent() )

        this.render(student);
    },

    studentClicked: function(e){

        // elke event die gebeurd (click, mousemove, etc.) geeft een event parameter
        // dit event object geeft je veel informatie over wat er is gebeurd
        // bijvoorbeeld op wie er is geklikt
        var clickedRow = e.target,
            id = clickedRow.dataset.id; // we gebruiken .dataset.id om het attributt data-id uit te lezen

        // we weten nu op wie er is geklikt
        console.log(id);


    }

}
