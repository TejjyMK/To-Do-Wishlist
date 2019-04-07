/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append('<li>'+ item + '<span class="label pending">Pending</span> </li>');
}

$(document).on('click','#add-to-list',function () {
    var item = $('#item');
    if(item.val() !== ''){
        addToList(item.val());
        $(item).val('');
        item.focus();

        updateTotal();
    }
   else{
       alert('You need something to add');
    }
});

$(document).on('click','.pending', function () {
    var li_node = $(this).parent(); // ! this is the parent of the span you clicked on being the li

    // ? no space here cos its like the css => it was nesting
    // $('.label.pending').remove(); // ? this is too generic, so all of them disappeared


    // ! this here is what you clicked on
    this.remove('.label.pending');


    li_node.append('<span class="label success">Done!</span>');
    li_node.addClass('completed');

    updateTotal();
});



function updateTotal(){
    // ? Wasn't running because it was outside the function

    var pending = $('.pending').length;
    var completed = $('.completed').length;

    $('.total').text('Pending: '+ pending + ' Completed: '+ completed);
}

/* */
