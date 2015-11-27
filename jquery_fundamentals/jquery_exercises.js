// SOLUTIONS GO BELOW EACH EXERCISE

// STEP 0: Document Needs to be ready first!
// Ensure that all the code you'll write below only execute when the document is ready
// Hint: you can use .ready on the document object

$(document).ready(function(){

// STEP 1: Change Background

// Change the background color of '#step-1' by script.
// Hint: you can use .css

$("#step-1").css("background-color", "green");


// STEP 2: Change Parent

// Change the text in the span, a child of "#step-2"
// Hint: you can use .text

$("text-2>span").text("This will change the text");

// STEP 3: Create Clone

// Create a clone of the span in "#step-3" and position it under the original one.
// Hint: you can use .clone and .insertAfter

$("#step-3").clone().insertAfter("#step-3");

// STEP 4: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css

$(".target-4>span").eq(1)css("background-color" , "purple");


// STEP 5: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr

$(".taget-5>button").attr("disabled", "disabled");

// STEP 6: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr

$("input[type=checkbox]").removeAttr("checked");

// STEP 7: Change Parent

// Move "#child-7" from "#step-7a" to "#step-7b"
// Hint: you can use .appendTo

$("#child-7").appendTo("#step-7b");


// STEP 8: Change Size

// Double the size of "#step-8"
// Hint: you can use .css, .width and .height

$("#step-8").css("min-height", "400px").css("width", "100%");


// STEP 9: Empty Elements

// Remove all children and text of "#step-9"
// Hint: you can use .empty

$("#step-9>.child").remove();


// STEP 10: Delay

// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use setTimeout and alert (these aren't jQuery functions!)

setTimeout(alert("ALERT"), 1000);

// STEP 11: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5

setTimeout(function(){alert($("#step-11 .child").length)}, 3000);

// STEP 12: Animate

// Make "#step-12" double size with animation
// Hint: you can use .animate, .width, and .height

$("#step-12").animate({width: "100%", height: 500}).stop;

// STEP 13: All But One

// Remove all children of "#step-13" other than any h4 tags
// Hint: you can use .children, .not and .remove

$("#step-13").children().not("h4").not("h2").remove();

// STEP 14: Without Children

// Remove all 'div's from "#step-14" which have no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not

$("#step-14").children("div:empty").remove();

});

