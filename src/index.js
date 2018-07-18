import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC4KzAS2gXBwdYM_mk1OsprmiXTKhSJY-4';



class App extends Component {
	constructor(props){
		super(props);

		this.state = {
		videos: [],
		SelectedVideo: null
		 };

		this.videoSearch('surfboards');
}

	videoSearch(term){
		YoutubeSearch({key: API_KEY, term: term}, (data) => {
		this.setState({ 
			videos: data,
			SelectedVideo: data[0]
			});
		});	
	}

	render () {

		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
	return (
		<div>
			<SearchBar onSearchChange={videoSearch} />
			<VideoDetail video={this.state.SelectedVideo}/>
			<VideoList 
			onVideoSelect={SelectedVideo => this.setState({SelectedVideo}) }
			videos={this.state.videos} />
		</div>
		);
	}
};

ReactDOM.render(<App />, document.querySelector('.container'));
