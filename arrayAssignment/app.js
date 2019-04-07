

//  1)Declare an empty array using JS literal notation to store student names
//   in future.
var students= [];

// **************************************************************************************


// 2)Declare an empty array using JS object notation to store student 
// names in future.
var students = new Array();

// **************************************************************************************


// 3)Declare and initialize a strings array.
var cars= ['bmw','audi','nissan'];

// **************************************************************************************

// 4)Declare and initialize a numbers array.
var ages = [1994,1995,2001,2018];

// **************************************************************************************

// 5)Declare and initialize a boolean array.
var conditions =[true,false];

// **************************************************************************************

// 6)Declare and initialize a mixed array.
var arsalan = ['arsalan', 24];

// **************************************************************************************

// 7)Declare and Initialize an array and store 
// available mobile networks in Pakistan.

var networks = ['jazz','zong','telenor','ufone'];

// **************************************************************************************

// 8)Declare and Initialize an array and store available education
//  qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like: 

//SOLUTION: var educations= ['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL','PHD'];
//  document.write("<h4>Qualification</h4>");
//  document.write("1)"+" "+"<b>"+educations[0]+"</b></br>");
//  document.write("2)"+" "+"<b>"+educations[1]+"</b></br>");
//  document.write("3)"+" "+"<b>"+educations[2]+"</b></br>");
//  document.write("4)"+" "+"<b>"+educations[3]+"</b></br>");
//  document.write("5)"+" "+"<b>"+educations[4]+"</b></br>");
//  document.write("6)"+" "+"<b>"+educations[5]+"</b></br>");
//  document.write("7)"+" "+"<b>"+educations[6]+"</b></br>");
//  document.write("8)"+" "+"<b>"+educations[7]+"</b></br>");

// **************************************************************************************

// 9)Declare and initialize an empty array to store top movies of 
// 2015.  Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

// SOLUTION: var movies = ['Age of Ultron','Spectre','Jurassic World','Inside Out'];
// document.write("<h2>Top movies of 2015</h2>");
// document.write("1)"+" "+"<b>"+movies[0]+"</b></br>");
// document.write("2)"+" "+"<b>"+movies[1]+"</b></br>");
// document.write("3)"+" "+"<b>"+movies[2]+"</b></br>");
// document.write("4)"+" "+"<b>"+movies[3]+"</b></br>");
// document.write("<h2>Length of the array:"+" "+movies.length+"</h2>");

// **************************************************************************************

// 10)Declare and Initialize an array with your favorite cars. Show  
// a.	First index of the array 
// b.	Car at first index of the array 
// c.	Last index of the array 
// d.  Car at last index of the array 

// solution: var Fcars=['audi','volvo','ford','lamborghini'];
// document.write("<h2>Favorite Cars</h2>");
// document.write("<b>"+Fcars+"</b>");
// document.write("<p>First index of the array:"+" "+Fcars.indexOf('audi')+"</p>");
// document.write("<p>Car at first index of the array:"+" "+Fcars[0]+"</p>");
// var last=Fcars.length-1;
// document.write("<p>last index of the array:"+" "+last+"</p>");
// var c=Fcars.pop();
// document.write("<p>Car at last index of array:"+" "+c);

// **************************************************************************************

// 11)Write a program to store 3 student names in an array. 
// Take another array to store score of these three students.
//  Assume that total marks are 500 for each student, 
//  display the scores & percentages of students like:

// solution: var Stud_name =['Micheal','Jhon','Tony'];
// var Stud_score=[320,230,480];

// document.write("Score of "+Stud_name[0]+" "+"is"+" "+Stud_score[0]+"."+"Percentage:"+(Stud_score[0]/500)*100+"%"+"<br>");
// document.write("Score of "+Stud_name[1]+" "+"is"+" "+Stud_score[1]+"."+"Percentage:"+(Stud_score[1]/500)*100+"%"+"<br>");
// document.write("Score of "+Stud_name[2]+" "+"is"+" "+Stud_score[2]+"."+"Percentage:"+(Stud_score[2]/500)*100+"%"+"<br>");

// **************************************************************************************

// 12)Initialize an array with color names.Display the array elements in your browser.
            var colors=['red','green','blue','pink','yellow'];
            // --------------------
    // A)Ask the user what color he/she wants to add to the beginning & 
    // add that color to the beginning of the array. 
    // Display the updated array in your browser.

    // solution: document.write("<b>GIVEN_ARRAY:</b>"+colors+"<br>");
    // var Add=prompt("What color do you want add at the  beginning of the given array");
    // colors.unshift(Add);
    // document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors); 
            
            // --------------------

     // B)Ask the user what color he/she wants to add to the end &
    //  add that color to the end of the array.
    //   Display the updated array in your browser. 
    
    // solution: document.write("<b>GIVEN_ARRAY:</b>"+colors+"<br>");
    // var Add=prompt("What color do you want add at the  end of the given array");
    // colors.push(Add);
    // document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors);

            // --------------------
    // C)Add two more color to the beginning of the array. 
    // Display the updated array in your browser.

    //  solution: document.write("<b>GIVEN_ARRAY:</b>"+" "+colors.join(" --- ")+"<br>");
    //  var Add=colors.unshift('black','golden');
    //  document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors.join(" --- "));

            // --------------------
    // D)Delete the first color in the array. Display the updated array in your browser. 
     
    //solution: document.write("<b>GIVEN_ARRAY:</b>"+" "+colors.join(" --- ")+"<br>");
    //  var Add=colors.shift();
    //  document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors.join(" --- "));

        // --------------------

    // E)Delete the last color in the array. Display the updated array in your browser. 
    //SOLUTION: document.write("<b>GIVEN_ARRAY:</b>"+" "+colors.join(" --- ")+"<br>");
    //  var Add=colors.pop();
    //  document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors.join(" --- "));

         // --------------------
    //  F)Ask the user at which index he/she wants to add a color & 
    // color name. Then add the color to desired position/index. 
    // . Display the updated array in your browser. 
   
    //Solution:  document.write("<b>GIVEN_ARRAY:</b>"+" "+colors.join(" --- ")+"<br>");
    // var Add=colors.splice(prompt("Plz enter array index number where you want to display your color name"),0,prompt("PLz enter color name "));
    // document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors.join(" --- "));

            // --------------------

    // G)Ask the user at which index he/she wants to delete color(s) & 
    // how many colors he/she wants to delete. 
    // Then remove the same number of color(s) from user-defined position/index.
    //  Display the updated array in your browser. 

    // SOLUTION:  document.write("<b>GIVEN_ARRAY:</b>"+" "+colors.join(" --- ")+"<br>");
    // var Add=colors.splice(prompt("Which color do you want to delet?enter color index from given colors"),prompt("How many color do you want to delect? "));
    // document.write("<b>UPDATED_ARRAY:</b>"+"  "+colors.join(" --- "));


// **************************************************************************************

// 13)Write a program to store student scores in an array &
//  sort the array in ascending order using Array’s sort method.  

    // SOLUTION: var score=[320,230,480,120];
    // document.write("GIVEN_SCORE:"+" "+score+"<BR>");
    // document.write("UPDATED_SCORE:"+" "+score.sort());
    
  // **************************************************************************************

// 14)Write a program to sort the below
// mentioned array: var fruits = [“strawberry”, “apple”, “orange”, “banana”]; 

    //SOLUTION  var fruits = ['strawberry', 'apple', 'orange', 'banana']; 
    // document.write("GIVEN_SCORE:"+" "+fruits+"<BR>");
    // document.write("UPDATED_SCORE:"+" "+fruits.sort());

// **************************************************************************************

// 15)Write a program to initialize an array with city names.
//  Copy 3 array elements from cities array to selectedCities array.  
 
//solutions: var cities = ['karachi','lahore','islamabad','quetta','peshawar'];
// document.write("CITIES_LIST:<BR>"+" "+cities+"<BR>");
// document.write("SELECTED_CITIES_LIST:<BR>"+" "+cities.slice(2,4));

// **************************************************************************************

// 16)Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 

//  SOLUTION: var arr = ['This' , 'is',  'my', 'cat']; 
// document.write("<b>Array:</b><br>"+arr+"<br>");
// document.write("<b>String:</b><br>"+arr.join(" "));


// **************************************************************************************

// 17)Create a new array. Store values one by one in such a way 
// that you can access the values in the order in
//  which they were stored. (FIFO-First In First Out) 

// var devices= ['keyboard','mouse','printer','monitor'];
// document.write("Devices<br>"+devices+"<br>");
// document.write("OUT:<BR>"+devices.shift()+"<br>");
// document.write("OUT:<BR>"+devices.shift()+"<br>");
// document.write("OUT:<BR>"+devices.shift()+"<br>");
// document.write("OUT:<BR>"+devices.shift()+"<br>");

// **************************************************************************************

// 18)Create a new array. Store values one by one in such a
//  way that you can access the values in reverse order. (Last In-First Out) 


// var devices= ['keyboard','mouse','printer','monitor'];
// document.write("Devices<br>"+devices+"<br>");
// document.write("OUT:<BR>"+devices.pop()+"<br>");
// document.write("OUT:<BR>"+devices.pop()+"<br>");
// document.write("OUT:<BR>"+devices.pop()+"<br>");
// document.write("OUT:<BR>"+devices.pop()+"<br>");

// **************************************************************************************

// 19)Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier)
//  in an array. Display the following dropdown/select menu in your
//   browser using document.write() method:


// var phone =['apple','samsung','motorola','nokia','sony','haier'];

// document.write("<select>"+
// "<option value='apple'>"+phone[0]+"</option>"+
// "<option value='samsung'>"+phone[1]+"</option>"+
// "<option value='motorola'>"+phone[2]+"</option>"+
// "<option value='nokia'>"+phone[3]+"</option>"+
// "<option value='sony'>"+phone[4]+"</option>"+
// "<option value='haier'>"+phone[5]+"</option>"+
// "</select>");

// **************************************************************************************

 
// 20)Declare and initialize an empty multidimensional array.  
// (Array of arrays)

// var multi_array =[[]];

// **************************************************************************************

// // 21)Declare and initialize a multidimensional array representing the following matrix:

// var multi_array =[[0,1,2],[1,0,1],[2,1,0],[3,2,1]];

// document.write(multi_array[0][0],multi_array[1][0],multi_array[2][0],multi_array[3][0]+'<br>');
// document.write(multi_array[0][1],multi_array[1][1],multi_array[2][1],multi_array[3][1]+'<br>');
// document.write(multi_array[0][2],multi_array[1][2],multi_array[2][2],multi_array[3][2]+'<br>');