import React from 'react';

const MainLayout = ({children}) => {
  return (
    <>
      <div className="Global__main-container">
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout;