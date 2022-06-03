import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
