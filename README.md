---

# Volvo  Test Automation Framework 
Test automation framework infrastructure for running automated tests in Volvo Website -- Safety Page

---

## Description
This framework contains configuration files, page objects, test data, test cases, and corresponding keywords/methods for automating Volvo Website -- Safety Page

---

## Test Case List
   1. pageLoadingAndCookies.test
   2. mainContentBlock.test
   3. carsCarousel.test
   4. footer.test

**Note:** Not all tests are included in this framework, and the coverage will be further expanded and enhanced in the future

---

## Requirements
* Docker is Installed
* NodeJS is Installed
* Java is Installed
* Visual Studio Code is Installed (optional)
* Git is Installed

---

## Building Docker Image Using Dockerfile
   1. Make sure docker is installed and running (systemctl status docker)
   2. From the Project Directory
```
   docker build -t <docker image name> .
   example: docker build -t volvo -f Dockerfile .
```
   3. Check new image generated
```
   docker images <docker image name>
   example: docker images volvo
```

---

## Test Case Execution

1. Locally:
Clone the project to your local machine using the "git clone" command
```
    example: git clone  https://github.com/natalliaMuratava/volvotask.git 
```
Run tests on your local machine
```
    npm run wdio
```

2. Using docker image generated (see [Building Docker Image Using Dockerfile](#building-docker-image-using-dockerfile))
```
   docker run -it <docker image name>
   example: docker run -it volvo
```   
   
---

## Test Reporting
Reports are automatically generated using SPEC reporting.

