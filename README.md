# polymorphic-system

This repository demonstrate how we can implement a polymorphic system.

## Start the application
`node main.js`

For changes the I/O Device on runtime use the following CURL requests:

For outputDevice equal to 'console':
`curl -X GET "http://localhost:3000/change-output-device?outputDevice=console"`


For outputDevice equal to 'file':
`curl -X GET "http://localhost:3000/change-output-device?outputDevice=file"`


For outputDevice equal to 'voice':
`curl -X GET "http://localhost:3000/change-output-device?outputDevice=voice"`
