import React from 'react'
import 'styles/bootstrap.scss'
const EditButton = (props) => {
    return (
      <div className="row">
        <div className="col-sm-offset-1 col-sm-4">
          <button
            onClick={ props.editFn }
            type="button"
            className="btn btn-primary">
            Edit Me
          </button>
        </div>
      </div>
    )
}
EditButton.displayName = 'edit buton'
export default EditButton
