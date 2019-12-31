import React from 'react';

function Form (props) {
    const {mediumInputs, largeInputs, xlInputs, smallInputs, checkboxInput,
         formClass, handleButton, handleSubmit, handleToggle } = props
    return (
    <div>
    <form className={formClass?formClass:""} onSubmit = {handleSubmit}>
    {mediumInputs ?
      <div className="form-row col-lg-10">
      {mediumInputs.map(input=>
          <div className="form-group col-lg-6">
          <label htmlFor={input.name}>{input.label}</label>
          <input type={input.type} placeholder={input.placeholder?input.placeholder:input.value} className="form-control" 
                 id={input.name} value = {input.value} onChange = {input.handle}/>
          {input.help?
          <small id={`${input.name}Help`} className="form-text text-muted">{input.help}</small>
          : null
          }
          </div>
      )}
      </div>
    : null
    }
      {largeInputs ? largeInputs.map(input=>
      <div className="form-group col-md-10">
          <label htmlFor={input.name}>{input.label}</label>
          <input type={input.type} className="form-control" id={input.name} 
                placeholder={input.placeholder?input.placeholder:input.value} value = {input.value} 
                onChange = {input.handle}/>

          {input.help?
          <small id={`${input.name}Help`} className="form-text text-muted">{input.help}</small>
          : null
          }

      </div>
      )
      : null
      } 

      {xlInputs ? xlInputs.map(input=>
        <div className="form-group col-lg-10">
            <label htmlFor={input.name}>{input.label}</label>
            <textarea className="form-control" id={input.name} placeholder={input.placeholder?input.placeholder:input.value} 
                        rows="2" value = {input.value} onChange = {input.handle}/>
            {input.help?
          <small id={`${input.name}Help`} className="form-text text-muted">{input.help}</small>
          : null
          }
        </div>
        )
      : null
      }    

      {smallInputs ? 
      <div className="form-row col-md-10">
          {smallInputs.map(input=>
          <div className="form-group col-md-4">
          <label htmlFor={input.name}>{input.label}</label>
          <input type={input.type} className="form-control" id={input.name} value = {input.value} 
                 placeholder={input.placeholder?input.placeholder:input.value} onChange = {input.handle}/>
          
          {input.help?
          <small id={`${input.name}Help`} className="form-text text-muted">{input.help}</small>
          : null
          }
          </div>
          )}
          
      </div>
      : null
      }

      {checkboxInput ? checkboxInput.map(input=>
      <div className="form-group form-check ">
          <input type="checkbox" className="form-check-input col-md-3" id={input.name} onChange={handleToggle} value = {input.value}/>
          <label className="form-check-label col-lg-10" htmlFor={input.name}>{input.label}</label>
      </div>
      )
      : null
      }
      <div className="form-group col-md-3">
      <button type="submit" className="btn btn-outline-success">{handleButton()}</button>
      </div>
      </form>
    </div>
  )}

export default Form;
