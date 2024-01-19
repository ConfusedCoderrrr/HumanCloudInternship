import React from 'react'

const OldLogin = () => {
  return (
    <div className="container d-flex justify-content-center mt-4">
    <form>
      <div class="form-group text-center">
        <h1 className="mb-4 pb-2 border-bottom border-3 border-primary">--TO DO List App--</h1>
        <div class="row">
          <div class="col-sm-8 pr-sm-1">
            <input type="text" class="form-control" value={inputdata} placeholder="Add To Do Tasks" onChange={(event) => {
              setInputdata(event.target.value);
            }} />
          </div>
          <div class="col-sm-4 pl-sm-0">
            <button type="button" class="btn btn-primary"><AddIcon onClick={addItems
            } /></button>
          </div>
        </div>
        <div className="itemList">
          {
            items.map((cur, index) => {
              return (
                <div className='mt-3'>
                <div className="row border-bottom border-1 border-primary">
                  <div className="col-sm-8"><h5>{cur}</h5></div>
                  <div className="col-sm-2" ><EditIcon onClick={() => {
                    alert("hello");
                  }} /></div>
                  <div className="col-sm-2"><DeleteIcon /></div>
                </div>
              </div>
              )
            })
          }
        </div>

        <button type="button" class="btn btn-primary my-3">Clear List</button>

      </div>


    </form>

  </div>
  )
}

export default OldLogin
