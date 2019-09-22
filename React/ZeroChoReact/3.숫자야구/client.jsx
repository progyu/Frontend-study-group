import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import BaseBall from './Baseball';
import HooksBaseball from './HooksBaseball';
// const React = require('react');

// const ReactDom = require('react-dom');

// const { hot } = require('react-hot-loader/root');

// const BaseBall = require('./Baseball');

const Hot = hot(HooksBaseball);
// const Hot = hot(BaseBall);

ReactDom.render(<Hot />, document.querySelector('#root'));