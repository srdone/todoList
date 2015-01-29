$(document).ready(function () {
    // select submit button for actions
    $('#submit').on('click', function () {
        // store list item to variable *item*
        var item = $('#newItem').val();
        // clear input for new item
        $('#newItem').val(''); 
        // add new item if string length is more then 0
        if (item.length > 0) {
            // import distinction between append and html methods, try both to see what happens
            $('#list').append('<li>' + item + '</>');
        }
        
    });


    $('#list').on('dblclick','li', function () {
        $(this).remove();
    });

    $('#list').on('click', 'li', function () {
        $(this).toggleClass('done');
    });
















});