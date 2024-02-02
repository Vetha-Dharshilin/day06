class circle{
    constructor (radius, color)
   {
     this.radius = radius
     this.color = color
     }
     
     getColor(){
      return this.color;
     }
     
     getRadius(){
     return this.radius;
     }
     
     getArea(){
       var area = (3.14*this.getRadius()*this.getRadius()).toFixed(2);
       return`"Area of circle is" ${area}`
     }
  
     getCircumference(){
       var circum = (2*3.14*this.getRadius());
       return `"Circumference of circle is"${circum}`
       }
     display () {
       var str =`[radius: ${this.getRadius()} , color :${this.getColor()}]`;
       return str
     
   }
 }
  var circle1 = new circle();
  var circle2 = new circle("red");
  var circle3 = new circle(3,"green");
  
  console.log(circle1.display());
  console.log(circle2.display());
  console.log(circle3.getArea());
  console.log(circle3.getCircumference());