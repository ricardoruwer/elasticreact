# Elastic Search & React
A simple test example to filter the posts on a search input.

## Requirements
[Elastic Search](https://www.elastic.co/downloads/elasticsearch)
[NPM](https://www.npmjs.com/)

## Installation
```
npm install
```

## RUN
```
npm start
```

Will be available on http://localhost:3333

## Elastic Search Example Documents
```
POST localhost:9200/my_custom_index_name/posts
BODY
{
    "title": "This is a sample title",
    "subtitle": "This is a sample subititle",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
```

## Elastic Search On Docker
```
docker run -d -p 9200:9200 --name elasticsearch elasticsearch
```
