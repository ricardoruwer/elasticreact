import React from 'react'
import Search from './components/Search'
import Posts from './components/Posts'
import Post from './services/Post'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.updatePosts = this.updatePosts.bind(this)
    }

    updatePosts(posts) {
        this.setState({ posts: posts.hits.hits })
    }

    componentDidMount() {
        Post.search().then(posts => {
            this.updatePosts(posts)
        })
    }

    render() {
        return (
            <div>
                <Search updatePosts={this.updatePosts} />
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}

export default App
