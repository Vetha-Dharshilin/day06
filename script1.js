class uber{
 

    constructor (distance)
    {
      this.distance = distance
      }
    price(){
      return (this.distance) *18
      }
  
  }
   var Tr = new uber(5)
    console.log(Tr.price())