var React = require('react');
var ReactDOM = require('react-dom');
var data = require('./api.json');
var stringHash = require('string-hash');
require('./style.css');

var APIList = React.createClass({
  render: function() {
    var apis=[];
    for (var key in this.props.data) {
      if (this.props.data.hasOwnProperty(key)) {
        apis.push(
            <APIDesc title={key} desc={this.props.data[key].description} usage={this.props.data[key].usage} urls={this.props.data[key].urls} key={stringHash(key)}/>
        );
      }
    }

    return (
      <div>
        <h1>Jellykid APIs</h1>
        <div id="apiList">
          {apis}
        </div>
      </div>
    );
  }
});

var APIDesc = React.createClass({
  render: function(){
    var urls = this.props.urls.map(function(url){
      return (
        <a href={url} target="_blank" key={stringHash(url)}>{url}</a>
      );
    });

    return (
      <div className="api">
        <h2>{this.props.title}</h2>
        <p>
          {this.props.desc}
        </p>
        <h3>Usage:</h3>
        <p>
          {this.props.usage}
        </p>
        <h3>Examples:</h3>
        <p>
          {urls}
        </p>
      </div>
    );
  }
});


ReactDOM.render(
  <APIList data={data}/>,
  document.getElementById('apis')
);
