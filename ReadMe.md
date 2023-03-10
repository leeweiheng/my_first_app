# **Introduction**


This is a simple 3 screens mobile application built by using react native framework.
1. Registration Page
2. Login Page
3. Profile Page
<br><br>


## Registration Page
***
This is the first page you will see when opening the application. This page allow user to register an account will all the required field(those field with *) filled with valid input(E.g. email field required valid email pattern and contact number field input can only have alphabet)


## Login Page
***
This page allows users to login using the registered email and password. If you already have an account, you can access this page directly through the clickable text 'Login' which is present at the bottom of the Registration Page.


## Profile Page
***
To access this page a user is required to login using the registered email and the user details will be shown here. The user detail can be edited by clicking at the 'Edit' button which is present at the bottom of the Profile Page. The modified data can be saved only when it is valid, E.g. you can change the Name but cannot leave it empty, contact number only accept number but no others.
<br><br>


# **Limitation & Improvement**


### Limitation:
This is a simple application, it will only store the data of the last registered user so in order to login to the application you need to login using the latest account you registered.
<br>


### Improvement:
The way of how data was stored in the local storage can be changed so that multiple user data can be saved.
<br><br>
***


### Limitation:
The application does not allow the user to change the password.
<br>


### Improvement:
Instead of using the same page for profile detail modification by changing the editable parameter of the input field, direct the user to another page to allow users modify their profile detail so more input fields can be added to allow users modify more detail.
<br><br>
***


### Limitation:
Currently the application does not allow users to logout yet.
<br>


### Improvement:
Implement a logout button to allow the user to logout from the application easily without having to close and re-open the application.

