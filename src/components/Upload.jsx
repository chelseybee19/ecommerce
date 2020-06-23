import React, { Fragment } from 'react';

const Upload = () => {
  return(
    <Fragment>
    <form>
      <div className="custom-file">
        <input type="file" class="custom-file-input" id="customFile"/>
        <label className="custom-file-label" for="customFile"> Choose file</label>
      </div>
      <input type="submit" value="upload"></input>
      </form>
    </Fragment>
  )
}

export default Upload