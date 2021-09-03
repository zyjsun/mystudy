import React, { Component } from 'react';
interface Iprops {
  logo?: string,
  className?: string,
  content?: string
}
const Logo = (props: Iprops) => {
  const { logo, className } = props
  return (
    <img src={logo} className={className} alt="logo" />
  )
}

export default Logo;
