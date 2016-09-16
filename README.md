# Elastic Search & React
A simple test example to filter posts on a search input.

## Requirements
 - [Elastic Search](https://www.elastic.co/downloads/elasticsearch)
 - [NPM](https://www.npmjs.com/)

## Installation
```
npm install
```

## RUN
```
npm start
```

Will be available on http://localhost:3333

## Elastic Search On [Docker](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
### Setup
```
make setup-es
```

### Create Elastic Search example data
```
make setup-data
```

## Elastic Search - Create documents example
```
POST localhost:9200/my_custom_index_name/posts
BODY
{
    "title": "This is a sample title",
    "subtitle": "This is a sample subititle",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
```

## Change index and type
Open the file src/services/Post.js and put there your index and type
