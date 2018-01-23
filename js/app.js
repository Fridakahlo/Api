
(function main(){

 var lien ="https://swapi.co/api/people/1";

      $.getJSON(lien)
      .then(function(data){
      console.log(data);

             // $('.name').append("<p>"+data.name +"</p>");
             // $('.birth_year').append("<p>"+data.birth_year +"</p>");
             // $('.height').append("<p>"+data.height +"</p>");
             // $('.mass').append("<p>"+data.mass +"</p>");
             // $('.hair_color').append("<p>"+data.hair_color +"</p>");
             // $('.skin_color').append("<p>"+data.skin_color +"</p>");
             // $('.eye_color').append("<p>"+data.eye_color +"</p>");
             // $('.gender').append("<p>"+data.gender +"</p>");

        var template=$('#template').html();
        Mustache.parse();
        var rendered=Mustache.render(template, {result:data});
        $("#target").append(rendered);


     });

})();


