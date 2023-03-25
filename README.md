This application is built with *Vite, React, TypeScript and Material UI*, powerful tools for building robust, scalable and performant web applications. The application is designed to provide a seamless user experience, while also allowing for easy maintenance and updates.

!!! *I took advantage of this code challenge and used tools that I didn't have the chance to use in my past projects, such as Vite, React Query, and material-react-table. I only scratched the tip of the iceberg.*

## *Getting Started*

### Prerequisites
- Node.js 
- npm
- developers_contacts_backend is up and running
- docker https://docs.docker.com/get-docker/
- docker-compose https://docs.docker.com/compose/install/

### Set up
1. clone repo: clone [repository URL]
2. create a *.env* file in the root of the project. Copy variables form example.env file into *.env* file
3. run command *npm i* to install all the dependencies
4. run command *npm run dev* to run the aplication
5. navigate to *http://localhost:5173/* in the brower to access the app

## *Features*
This application comes with a number of features:

Routing using React Router: the application has only one page for now Home page.
State management using React Query: powerful asynchronous state management for TS/JS, React.
Material UI: MUI offers a comprehensive suite of UI tools to help you ship new features faster.

### The application is organized into different directories and files to make it easy to navigate and maintain. Here's a brief overview of the file structure:

src/: contains the source code for the application. It is structured as follows: 
- core/: contains api, components and hooks that are generic and can be used easly all over the app
    - api/
    - components/
    - hooks/
- modules/: contains the React components used to build the application.
    - home/: 
        - components
        - helpers
        - hooks
        - constants.ts
        - Home.tsx
- types/
    - index.ts: contains the TypeScript type definitions used throughout the application
-  App.tsx: is the main entry point for the application
- index.css
- main.tsx: This file renders the React application and injects it into the index.html file.