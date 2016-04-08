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
        this.container = document.querySelector(".container");
        this.shuffleButton = document.querySelector("#shuffle");

        // de functie bind() zorgt ervoor dat je kunt vastzetten waar 'this' naar verwijst
        this.shuffleButton.addEventListener("click", this.shuffleStudent.bind(this));

        this.container.addEventListener("click", this.studentClicked.bind(this));
    },

    render:function(data){
        this.container.innerHTML = this.template(data);
    },

    shuffleStudent: function(e){
        // haal een random student op bij de model
        // en gebruik this.template() om vervolgens de template te updaten

        var randomStudent = this.model.getRandomStudent();

        this.render(randomStudent);

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