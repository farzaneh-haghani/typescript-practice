# TypeScript

CommonJs for Using require

ECMAScript for Using import export which is `type:modul`

## Client:

- npx create-react-app <appname> --template typescript
- npm create vite@latest

## Server:

install package.json with `type:modul` to using ECMAScript

    1. npm init es6 -y

    2.  npm i express dotenv cors nodemon pg postgres express-router

Install packages contain typescript decoration (@types) files with .d.ts to inform typescript compiler about all the typing information for the specific library like : @types/express…

    3.  npm i -D
            typescript
            @types/node
            @types/express
            @types/pg
            ts-node        <!-- node server.js    -->
            ts-node-dev    <!-- nodemon server.js -->

    4.  npx tsc --init
