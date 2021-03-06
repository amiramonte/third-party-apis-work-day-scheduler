// VARIABLES
let dateLocation = $('#currentDay');



let nineSaveBtn = $('#9am-button');
let tenSaveBtn = $('#10am-button');
let elevenSaveBtn = $('#11am-button');
let twelveSaveBtn = $('#12pm-button');
let oneSaveBtn = $('#1pm-button');
let twoSaveBtn = $('#2pm-button');
let threeSaveBtn = $('#3pm-button');
let fourSaveBtn = $('#4pm-button');
let fiveSaveBtn = $('#5pm-button');


// FUNCTIONS

function dateCreate() {
    dateLocation.text(moment().format("MMM Do, YYYY"));
}

dateCreate();


// conditional statements to apply appropriate text area color depending on time of day

function timeTracker() {
    let currentHour = parseInt(moment().format('HH'));

    $('.time-block').each(function() {
        let rowHour = parseInt($(this).attr('id'))
        console.log(rowHour, currentHour)
        if (rowHour < currentHour) {
            $(this).children('textarea').addClass("past");
        }else if (rowHour === currentHour) {
            $(this).children('textarea').removeClass("past").addClass("present");
        } else {
            $(this).children('textarea').addClass("future")
        }
    })
}

timeTracker();


// click functions for the save button on each hour that commit the value of text area to local storage, along with code that allows the same information to be retrived from local storage and appended back to the text area on page reload

$('.saveBtn').on('click', function() {
    const time = $(this).parent().attr('id')
    const textArea = $(this).siblings('textarea').val();

    localStorage.setItem(time, textArea);

    console.log(time, textArea);

})

$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))




// nineSaveBtn.click(function() {
//     console.log("hello world");
//     let nineTasks = $('#9am-tasks').val();

//     localStorage.setItem("nineScheduler", nineTasks);
// })

// let nineInfo = localStorage.getItem("nineScheduler");
// $('#9am-tasks').append(nineInfo);



// tenSaveBtn.click(function() {
//     console.log("Bob Dobolina");
//     let tenTasks = $('#10am-tasks').val();

//     localStorage.setItem("tenScheduler", tenTasks);
// })

// let tenInfo = localStorage.getItem("tenScheduler");
// $('#10am-tasks').append(tenInfo);


// elevenSaveBtn.click(function() {
//     console.log("Nope! Chuck Testa");
//     let elevenTasks = $('#11am-tasks').val();

//     localStorage.setItem("elevenScheduler", elevenTasks);
// })

// let elevenInfo = localStorage.getItem("elevenScheduler");
// $('#11am-tasks').append(elevenInfo);


// twelveSaveBtn.click(function() {
//     console.log("All your base are belong to us");
//     let twelveTasks = $('#12pm-tasks').val();

//     localStorage.setItem("twelveScheduler", twelveTasks);
// })

// let twelveInfo = localStorage.getItem("twelveScheduler");
// $('#12pm-tasks').append(twelveInfo);

// oneSaveBtn.click(function() {
//     console.log("Numa Numa");
//     let oneTasks = $('#1pm-tasks').val();

//     localStorage.setItem("oneScheduler", oneTasks);
// })

// let oneInfo = localStorage.getItem("oneScheduler");
// $('#1pm-tasks').append(oneInfo);


// twoSaveBtn.click(function() {
//     console.log("The whistles go wooooo");
//     let twoTasks = $('#2pm-tasks').val();

//     localStorage.setItem("twoScheduler", twoTasks);
// })

// let twoInfo = localStorage.getItem("twoScheduler");
// $('#2pm-tasks').append(twoInfo);


// threeSaveBtn.click(function() {
//     console.log("get pitted, so pitted");
//     let threeTasks = $('#3pm-tasks').val();

//     localStorage.setItem("threeScheduler", threeTasks);
// })

// let threeInfo = localStorage.getItem("threeScheduler");
// $('#3pm-tasks').append(threeInfo);


// fourSaveBtn.click(function() {
//     console.log("more dots more dots");
//     let fourTasks = $('#4pm-tasks').val();

//     localStorage.setItem("fourScheduler", fourTasks);
// })

// let fourInfo = localStorage.getItem("fourScheduler");
// $('#4pm-tasks').append(fourInfo);


// fiveSaveBtn.click(function() {
//     console.log("Leroy Jenkins");
//     let fiveTasks = $('#5pm-tasks').val();

//     localStorage.setItem("fiveScheduler", fiveTasks);
// })

// let fiveInfo = localStorage.getItem("fiveScheduler");
// $('#5pm-tasks').append(fiveInfo);
