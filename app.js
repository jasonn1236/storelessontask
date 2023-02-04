let app = new Vue({
  el: "#App",
  data: {
    // Create empty array to store subjects
    subjects: [],
    cart: [],
    Nameofu:"sd",
    phoneofu:"fg",
  },

  methods: {
    decrementSpaces1: function (num) {
      // Condition to ensure number of space is greater than 0
      if (this.subjects[num].spaces > 0) {
        // If true then decrement value by  1
       console.log(this.subjects[num]);
       //this.subjects[num].spaces--;
        theobj = {id:num,name:"",phonenumber:"",spaces:""};

      app.cart = theobj;
       console.log(this.cart.id);
      }
    },

    actioncompletednumber2: function(){
     
          
      // http://localhost:3000/order?id=5&name=lewis&phonenumber=072999974734&spaces=1
      //"http://localhost:3000/order?id="+this.cart.id+"&name="+this.cart.name+"&phonenumber="+this.cart.phonenumber+"&spaces="+lessonleft
       
     
        
      var payload = {
        id: 2,
        name:"jessie",
        phonenumber:0732425234,
        spaces: 3,
    };
    
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    
    fetch("http://storelessonapp-env.eba-gtpcag2c.eu-west-2.elasticbeanstalk.com/order12",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) });






             alert("you clicked the second one");


             lessonleft=  app.subjects[app.cart.id].spaces - 1;
           var whaits = app.subjects[app.cart.id].subject;
           console.log(whaits );
           var whaits2 = app.cart.id;
           console.log(whaits2 );
             var payload2 = {
            
              subject: whaits2,
              spaceleft: lessonleft,
          };
          
          var data1 = new FormData();
          data1.append( "json", JSON.stringify( payload2 ) );
          
          fetch("http://storelessonapp-env.eba-gtpcag2c.eu-west-2.elasticbeanstalk.com/updateinformation",
          {
              method: "PUT",
              body: data1
          })
          .then(function(res){ return res.json(); })
          .then(function(data2){ alert( JSON.stringify( data2 ) ) });
      





          alert("you clicked the second update ");


      
          },











    actioncompleted: function(){
     
          
// http://localhost:3000/order?id=5&name=lewis&phonenumber=072999974734&spaces=1
//"http://localhost:3000/order?id="+this.cart.id+"&name="+this.cart.name+"&phonenumber="+this.cart.phonenumber+"&spaces="+lessonleft
 

console.log(app.Nameofu);
console.log(app.phoneofu);
if( app.Nameofu== "" & app.phoneofu ==""){
alert("fill in form");

}else{
 
  lessonleft=  app.subjects[app.cart.id].spaces - 1;
  //  fetch("http://Storeforlessons-env.eba-gnjezgen.us-east-1.elasticbeanstalk.com?order?id="+app.cart.id+"&name="+app.Nameofu+"&phonenumber="+app.phoneofu+"&spaces="+lessonleft).then(function (response) {
 
  fetch("http://storelessonapp-env.eba-gtpcag2c.eu-west-2.elasticbeanstalk.com/order?id="+app.cart.id+"&name="+app.Nameofu+"&phonenumber="+app.phoneofu+"&spaces="+lessonleft).then(function (response) {
    response.json().then(function (json) {
     console.log("sent order");
     
  // finish order
      alert("order complete");
  
    });
  });
  

// Storeforlessons-env.eba-gnjezgen.us-east-1.elasticbeanstalk.com
//  fetch("http://Storeforlessons-env.eba-gnjezgen.us-east-1.elasticbeanstalk.com?subject="+app.subjects[app.cart.id].subject+"&spaceleft="+lessonleft).then(function (response)
 
fetch("http://storelessonapp-env.eba-gtpcag2c.eu-west-2.elasticbeanstalk.com/update?subject="+app.subjects[app.cart.id].subject+"&spaceleft="+lessonleft).then(function (response) {
    response.json().then(function (json) {
     console.log("sent order");
     
  // finish order
      alert("order complete");
  
    });
  });



}



       

    

    }

  },


  created: function () {
    // Retrieves lesson list from Express server using Fetch
    fetch("http://storelessonapp-env.eba-gtpcag2c.eu-west-2.elasticbeanstalk.com/lessons").then(function (response) {
      response.json().then(function (json) {
        console.log(json);
        // Add the data from the retrieved JSON to the subjects array
        app.subjects = json; 
      });
    });
  },
});
