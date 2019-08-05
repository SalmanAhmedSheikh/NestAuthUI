import React from 'react';

export default class test extends React.Component
{

constructor(props){

    super(props);


    this.state={

    uploaderror:''    
    }


this.handleUpload=this.handleUpload.bind(this);


}
handleUpload(e)
{
    let file = document.getElementById("fileName");
      var fileName = file.value,
      idxDot = fileName.lastIndexOf(".") + 1,
      extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile=="jpg" || extFile=="jpeg"){
        return true;
      }else{
          this.setState({
              uploaderror:"Only jpg/jpeg and png files are allowed!"
            
            });
        return false;
      }
    

    
}

render()
{
return (<div>
Helllo Salman

<div style={{fontSize:"12", color:"red"}}>{this.state.uploaderror}</div>

<input name="file" id="fileName"  type="file" accept="image/jpg" ></input>

            <button type="button" onClick={e => this.handleUpload(e)} ></button>

</div>)

}

}