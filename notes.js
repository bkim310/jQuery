<script
  src="https://code.jquery.com/jquery-3.6.3.min.js"
  integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
  crossorigin="anonymous"
></script>;
//script for jQuery, put in HTML file at the bottom
$("h1").addClass("highlight");
//adds the class "highlight" to all h1's, styling them all the same way

//CHAINING WITH jQUERY
const $h1 = $("h1");
$h1
  .addClass("highlight")
  .css("background-color", "teal")
  .text("CHAINING IS FUN!");
//chained together 3 methods into one onto the h1 elements that exist

//TRAVERSAL METHODS
//NEXT and PREV let us find the next or previous element from our selected element
const $specialLI = $("li").eq(3); //produces jquery object of the Monitoring li
$specialLI.next(); //gives us the next LI after our selected one
$specialLI.prev(); //gives us the previous LI before our selected one
//can use next and previous on a collection of elements (ie. all li's : $("li").next() will loop through all of the available li's )

//PARENT lets us search for the direct parent of the element
$specialLI.parent(); //gives us the direct parent which is the ul
$("li").parent(); //gives us ul, as that is the parent for all of the li's
$("li a").parent(); //gives us 7 different li's, as each one does not have the same parent

//CHILDREN allows us to find DIRECT children from the given element
$("ul").children(); //will return the direct children, which would be just the li's
//children does not check for multi level descendants
$("ul").children("li"); //can check for specific elements that are children of the element

//FIND can allow us to search for multi-level descendants
$("ul").find("a"); //will find the 7 anchor tags associated with each li

//CREATING APPENDING REMOVING ELEMENTS
//APPEND lets us create html or select some element to append to our selected element
$("ul"); //select something to append to
$("ul").append("<li class='highlight'>I am NEW!</li>"); //makes a new li with text in it, and can have classes in it
$("li").append("<input type = 'checkbox'/>"); //creates a checkbox at the end of every li in our document
$("li").prepend("<input type = 'checkbox'/>"); //creates a checkbox at the start of every li in our document

//$("<HTMLtext>") lets us create new html
$("<h1>"); //creates us a new h1 element
$("<h1>HELLO</h1>").css("color", "orange"); //creates HTML but doesn't show anywhere
//.appendTo() allows us to attach some HTML to whatever element we want to
$("<h1>HELLO</h1>").css("color", "orange").appendTo("p"); //creates an h1 with text Hello and css color orange and attaches it to every p in the document
//.after() allows us to write some HTML to add as a sibling to the selected element
$("li").after("<bold>HI</bold>"); //will create a bolded HI as children of the ul, or sibling of each li in the document
//.remove() will remove all of the available selected elements off the document
$("h1").remove(); //removes all h1's on the document
$("img").remove(); //removes all imgs on the document

//EVENTS IN jQUERY
//when you click on any img in the document, alert "HELLO!"
$("img").click(function () {
  alert("HELLO!");
});
//when you mouse leave an image, log "LEAVING AN IMAGE"
$("img").on("mouseleave", function () {
  console.log("LEAVING AN IMAGE");
});
//when we hover onto an image, we give it a border
$("img").on("mouseenter", function () {
  $(this).css("border", "5px solid red");
});
//when we click on an image, we remove the image entirely
$("img").on("click", function () {
  $(this).remove();
});

//EVENT DELEGATION
//this lets us add inputs when we click on the add input button
$("#add-input").on("click", function () {
  $("form").append("<input type='text'/>");
});
//when we click on any of the inputs, it adds text bamboozled, but NOT to inputs that were added from our button because they didn't exist yet, so we use event delegation
$("input").on("focus", function () {
  $(this).val("BAMBOOZLED");
});
//we can specify a selector that can filter out the event and only run the callback if the selector is valid
//in our form, when we focus on an INPUT, regardless if it existed on load or not, it will change the text to BAMBOOZLED
$("form").on("focus", "input", function () {
  $(this).val("BAMBOOZLED");
});

//ANIMATIONS
//when we click on an image, it fades into transparent (its still there, just display set to none)
//we can .remove() to get rid of it after it fades away as a callback
//it fades out over the course of 3000 ms
$("img").on("click", function () {
  $(this).fadeOut(3000, function () {
    $(this).remove;
  });
});
//same thing but fades the image in
$("img").on("click", function () {
  $(this).fadeIn(3000, function () {
    $(this).remove;
  });
});
//there is an animate method that allows us to add in multiple factors to animate
//we pass in an
$("img").on("click", function () {
  $(this).animate(
    {
      opacity: 0,
      width: "50px",
    },
    2000, //length of time to animate comes after the object
    function () {
      $(this).remove; //this callback will remove the image after the animation finishes
    }
  );
});
