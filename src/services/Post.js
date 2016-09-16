import elasticsearch from 'elasticsearch'

const client = elasticsearch.Client({
    host: 'http://localhost:9200'
});

const Post = {
    search: query => {
        return client.search({
            index: 'my_custom_index_name',
            type: 'posts',
            size: 30,
            q: query ? '*' + query + '*' : '*'
        })
    }
}

export default Post
