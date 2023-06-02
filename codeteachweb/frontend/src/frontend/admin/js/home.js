const ReactDOM = require("react-dom");
const React = require('react');
const PropTypes = require("prop-types");
const { createRoot } = require('react-dom/client');
const {useState,useEffect} = React;
import '../css/config.css';

const Navbar = () => {
  return <h1 className="">codeteachweb</h1>;
};

const Home = () => {
  return <Navbar />;
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(React.createElement(Home));

