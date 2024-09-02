Delete an Item

- In the List component, add a delete button for each list item.
- The List component needs to receive a new prop called onDeleteActivity;
  pass it to the delete button as onClick prop;
  pass the activity's id to onDeleteActivity as argument.
- In the App.js, write a function handleDeleteActivity, which accepts an id as parameter. The function should filter the activities state and keep all objects except the one with the given id.
  Pass handleDeleteActivity to the List component as onDeleteActivity prop.
