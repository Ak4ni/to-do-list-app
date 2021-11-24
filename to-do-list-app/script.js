function newItem(){

    // 1. Add a new list item (jQuery)
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append (inputValue);
  
    if (inputValue === '') {
      alert('You must write something!');
    } else {
          $('#list').append(li);
      $('#input').val('')
    }
  
    //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass('strike');
    }
  
    li.on('dblclick',  crossOut);
  
    // Adding a delete button
    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
  
    function deleteListItem() {
      li.addClass('delete');
    }
    deleteButton.on('click', deleteListItem);
  
    $('#list').sortable()s
  }

