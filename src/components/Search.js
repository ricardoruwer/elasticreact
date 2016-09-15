import React from 'react'
import Post from '../services/Post'

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		Post.search(event.target.value).then(posts => {
            this.props.updatePosts(posts)
        })
	}

	render() {
		return (
			<form autoComplete="off">
				<input type="search" name="query" placeholder="Busca..."
					onChange={this.handleChange} />
			</form>
		)
	}
}

export default Search
