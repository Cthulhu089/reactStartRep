//Import the library
 import React from 'react';
 import ReactDom from 'react-dom';
 import YTSearch from 'youtube-api-search';
 //Import Components to show in the index.
 import SearchBar from './components/search_bar';
 //Youtube Api
 const API_KET = 'AIzaSyB_8HdMM4UTypFpRbDLBwZpCi_S5bWyyQg';

//Creating a New Component.
const App = function () {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

//Genernate html code an put it in the dom
ReactDom.render(<App/>, document.querySelector('.container'));
