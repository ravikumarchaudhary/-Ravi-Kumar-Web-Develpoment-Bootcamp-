imprt React from "react";
function Footer(){
  
  const currentYear = new Date().getFullYear();
  return <p>Copyright c {currentYear}</p>
}
export default Footer;
