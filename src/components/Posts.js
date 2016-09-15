import React from 'react'
import Post from '../services/Post'

class Posts extends React.Component {
    render () {
        return (
            <div>
                <h1>Posts</h1>

                <span>Exibindo {this.props.posts.length} registro(s)</span>

                <ul>
                    {this.props.posts.map(post => {
                        return <li key={post._id}>{post._source.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Posts
