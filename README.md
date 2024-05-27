
## Getting started

### Installation
```sh
yarn install
```

### Running the app
```sh
# development
yarn run start
# watch mode
yarn run start:dev
# production mode
yarn run start:prod
```

## API Documentation

Before proceeding, run the app (cf. Getting started). 

### Documentation
Navigate to http://localhost:3000/api/docs/v1

### Generate Swagger JSON (e.g., for Postman)
Navigate to http://localhost:3000/api/docs/v1-json

## APP Documentation

### Generation
```sh
npx @compodoc/compodoc -p tsconfig.json -s
```

### Documentation
Navigate to http://localhost:8080/