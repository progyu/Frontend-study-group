// import React, { Component } from 'react';
import React, { memo } from 'react';
// const React = require('react');

// const { Component } = React;

const Try = memo( ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
});

// class Try extends Component {
//   render() {
//     const { tryInfo } = this.props;
//     return(
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

export default Try;
// module.exports = Try;