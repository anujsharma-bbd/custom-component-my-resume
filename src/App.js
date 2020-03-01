import React from 'react';
import './App.css';
import './webcomponents/my-resume';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.urlInput = React.createRef();
    this.state = { url: "http://demo9617924.mockable.io/myresume" };
  }
  onShowResume = (e) => {
    this.setState({ url: this.urlInput.value });
  }
  render() {
    return (
      <div className="container">
        <h1>
          WebComponents inside ReactJs</h1>
        <br />
        <div className='row'>
          <div className='col-sm-6'>
            <div className="form-group">

              <input className="form-control" defaultValue={this.state.url} ref={e => this.urlInput = e} placeholder='Enter Resume JSON url here...' />
              <br />
            </div>
          </div>
          <div className='col-sm-6 text-left'>
            <button onClick={this.onShowResume} className="btn btn-primary">Load Resume</button>
          </div>
        </div>
        <div>
          <my-resume url={this.state.url}></my-resume>
        </div>

      </div >
    );
  }
}

export default App;
