FROM ubuntu:latest AS BUILD

RUN apt-get update
RUN apt-get install openjdk-21-jdk -y
COPY src .

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:21-jdk-alpine

EXPOSE 8080

COPY --from=build /target/labclin-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]
