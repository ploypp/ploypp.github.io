import React, {Component} from 'react';

export default class Footnote extends Component {
  render() {
    return(
      <footer className="wrapper">
        <div className="col1-start col6-end">
          <p>&copy; 2021 made with &#x1F9CB;and react by ploy pruekcharoen</p>
        </div>
        <div className="col9-end">
          <a href="mailto:hploypp@gmail.com" target="_blank">email</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="https://www.linkedin.com/in/ploypruekcharoen/" target="_blank">linkedin</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="https://medium.com/@ploypp" target="_blank">blog</a>
          <span>&nbsp;.&nbsp;</span>
          <a href="https://drive.google.com/file/d/1aRxGnr9faSMWo8gbUeCIKEz71bKxiDa6/view?usp=sharing" target="_blank">resume</a>
        </div>
      </footer>
    );
  }
}
