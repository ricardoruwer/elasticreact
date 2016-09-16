import elasticsearch from 'elasticsearch'

const client = elasticsearch.Client({
    host: process.env.ELASTICSEARCH_URL || 'http://localhost:9200'
});

const Post = {
    search: query => {
        return client.search({
            index: process.env.ES_INDEX || 'my_custom_index_name',
            type: process.env.ES_TYPE || 'posts',
            size: 30,
            q: query ? '*' + query + '*' : '*'
        })
    }
}

export default Post
