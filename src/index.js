import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDcQG4X1AZSwgrVydjyL9QPS1gWgIM8Bn0';

// Create a new Component. This component should produce HTML

class App extends Component {
	constructor(props){
		super(props);

		this.state = {videos: [] };
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//videos : videos
			this.setState({ videos });
		});
	}

	render(){
		return( 
		<div>
			<SearchBar />
			<VideoDetail video={this.state.videos[0]}/>
			<VideoList videos={ this.state.videos } />
		</div>
		);
	}
}

//Render the component in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
 