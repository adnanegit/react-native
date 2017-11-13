import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component{
    state = {albums:[]};

    componentWillMount(){
        console.log('mounting...');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=> this.setState({albums:response.data}));        
    }

    renderAlbum(){
        return this.state.albums.map(album=>
            <AlbumDetail key={album.title} currentAlbum={album}/>);
    }

    render(){
        console.log(this.state);

        return(
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}