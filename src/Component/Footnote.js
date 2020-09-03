import React, {Component} from 'react';

export default class Footnote extends Component {
  render() {
    return(
      <footer>
        <address>
          {/* <p> Contact me at <a href='ploypp@uw.edu'>ploypp@uw.edu</a>.</p> */}
          <p className="copyright">&copy;2020 Ploypilin Pruekcharoen</p>
        </address>
      </footer>
    );
  }
}
