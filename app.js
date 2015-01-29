$(document).ready(function () {

    $('button').on('click', function () {
        // store list item to variable *item*
        var item = $('#newItem').val();
        // clear input for new item
        $('#newItem').val(''); 
        // add new item if string length is more then 0
        if (item.length > 0) {
            
            $('#list').append('<li>' + item + '</li>');
        }
        
    });



















});