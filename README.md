# SinglePageApplication-spring-angularjs
single page application using spring and angular js

Instructions:

1. Clone or download the repository as zip.
2. If downloaded as zip, extract it to a directory. You will then have two subdirectories: demo and resource.
3. Import the two directories as Maven Projects separately and wait for each of them to build.
4. Open your docker and create a redis container by executing this command:
      $ docker run -d --name redis -p 6379:6379 redis
5. Be sure to check the host name/ip address and port of the redis container so that the spring application can communicate with     the redis container. You can indicate your redis settings in the application.properties of the two Maven Projects               (src/main/resources/application.properties)
6. Find the DemoApplication.java and ResourceApplication.java and run them as java application.


Updated 09/08/2015:

1. Clone or download the repository as zip.
2. If downloaded as zip, extract it to a directory. You will then have 3 subdirectories: demo, authserver and resource.
3. Import the two directories as Maven Projects separately and wait for each of them to build.
4. Find the DemoApplication.java, AuthserverApplication.java and ResourceApplication.java and run them as java application.
5. Open a browser and go to http://localhost:8080
