import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyALXfhBxj16h65el91d9DLK9xkMqgSlPME';
 

// create new component that will be produced to HTML
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('420blazeit');
        
    }

    videoSearch(term) {
        YTSearch({
            key : API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        // make input delay 300ms before api calls on change
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        },300);

        return(
            <div>
                <SearchBar onSearchTermChange={(term => {
                    this.videoSearch(term);
                })}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={
                        (selectedVideo) => {
                            this.setState({selectedVideo})
                        }
                    }
                    videos={this.state.videos} 
                />

            </div>
        );
    }
}

// Add those produced HTML to the page.
ReactDOM.render(<App/>, document.querySelector('.container'));