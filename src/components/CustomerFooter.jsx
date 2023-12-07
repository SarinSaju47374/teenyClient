import React from 'react';
import { Layout } from 'antd';
 
const footer = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  backgroundColor: "#fff", /* Change this to your desired background color */
  textAlign: "center",
  padding: "20px 0",
  zIndex: "100",
}
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footer" style={footer}>
      <p>© 2023 Teeny Tiny. All rights reserved.</p>
    </Footer>
  );
};

export default CustomFooter;
