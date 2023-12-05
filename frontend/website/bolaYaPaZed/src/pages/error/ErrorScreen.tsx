import React from 'react';

type propsType={
    errorMsg:string,
    path:string
}

function ErrorScreen({errorMsg,path}:propsType) {
  return (
    <div>
        <div>
            {/* error message */}
            <h3>{errorMsg}</h3>
            {/* button for redirect */}
        </div>
    </div>
  )
}

export default ErrorScreen