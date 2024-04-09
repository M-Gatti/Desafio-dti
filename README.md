# Desafio-dti 
## Test Scenarios 

### Scenerio 1: Successfull login

- GIVEN The user is on the page "authentication"

- WHEN insert "e-mail"
  - AND insert "password"
  - AND clicked on "sign-in"
 
- THEN The user should be redirected to "my account"
  - AND The user name should be "Marcus Junior"

### Scenario 2: Creating a new account


- GIVEN The user is on the page "personal information"
 
- WHEN chose "title"
  - AND insert "First name"
  - AND insert "Last name"
  - AND insert "password"
  - AND insert "birthday"
  - AND clicked on "register"

- THEN The user should be redirected to "my account"
  - AND The user name should be "Marcus Junior" 

### Scenario 3:  Creating an existing account 


- GIVEN The user is on the page "authentication"

- WHEN insert "email"
  - AND clicked on "create an account"

- THEN The user should receive an error message "An account using this email address has already been registered." 
