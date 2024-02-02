
class Movie {
    
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
   
    if (typeof this.rating === "undefined") {
    this.rating = "PG";
    }
    }
   }
  
   var mov1 = new Movie("KGF","Annapurna",5);
   var mov2 = new Movie("RRR", "gold", 5);
   var mov3 = new Movie("12 Fail", "gold", 5);
   var mov4 = new Movie("Hi Nana", "platinum",5);
   console.log(mov1)
   
   function getPG(mov) {
    var res = []
    for (var i = 0; i < mov.length; i++) {
   if (mov[i].rating == "PG") {
    res.push(mov[i].title);
    }
    }
    return res;
   }
   var arr = [mov1, mov2, mov3, mov4]
   console.log(getPG(arr))
   
   var mov5 = new Movie("Neru", "Aashirvad Cinemas", 7);
   console.log(mov5);