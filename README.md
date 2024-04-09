# Desafio-dti 
## Test Scenarios 

### Scenerio 1: Successfull login
(GIVEN)
The user is on the page "authentication"
(WHEN) 
insert "e-mail"
insert "password"
clicked on "sign-in"
(THEN) 
The user should be redirected to "my account"
The user name should be "Marcus Junior"

### Scenario 2: Creating a new account

(GIVEN) 
The user is on the page "personal information"
(WHEN) 
chosed "title"
insert "First name"
insert "Last name"
insert "password"
insert "birthday"
clicked on "register"
(THEN) 
The user should be redirected to "my account"
The user name should be "Marcus Junior" 

### Scenario 3:  Creating an existing account 

(GIVEN)
The user is on the page "authentication"
(WHEN)
insert "email"
clicked on "create an account"
(THEN)
The user should receive an error message "An account using this email address has already been registered." 
