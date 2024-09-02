###Add Activity Form

Being able to create new data is a good starting point for an app, so the first step is to create a form component to add a new activity.

// Clean the app from everything which you don't need for a fresh start.

    Write a Form component which
        - contains a heading
        - has two input fields (name of activity, checkbox whether it is a - good- or bad-weather activity) with appropriate labels and a submit button;
        - it receives a prop called onAddActivity.

    Handle the submit event:

        Extract the submitted data as an object with the keys name and isForGoodWeather and their respective values.
            Hint: To get the boolean value of a checkbox, use .checked.

        Call onAddActivity and pass it the data object as argument.

    After submitting, reset the form and focus the first input field.

    Switch to the App.js and
        create a state for activities,
        write a function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
        please add a unique id to every new activity object; you can use uid to do so.

    Pass handleAddActivity to the Form component; make sure to use the correct prop name.

Use this wireframe as a reference:
