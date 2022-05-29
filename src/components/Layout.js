import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
