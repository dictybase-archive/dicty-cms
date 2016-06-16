import React from 'react'
const Button = (props) => {
    return (
      <div className="row top5">
        <div className="col-sm-offset-1 col-sm-4">
          <button
            onClick={ props.clickFn }
            type="button"
            className="btn btn-primary">
            { props.label }
          </button>
        </div>
      </div>
    )
}
Button.displayName = 'simple buton'
export default Button
