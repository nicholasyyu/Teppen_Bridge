const Teachertab = (props) => {
  
  function onclickhandler(e) {
    props.updateState(e.target.value)
  }
  
  return(
    <div className="tab">
      <button value='profile' className="tablinks" onClick={onclickhandler}>Profile</button>
      <button value='assignments' className="tablinks" onClick={onclickhandler}>Assignment</button>
      <button value='programs' className="tablinks" onClick={onclickhandler}>Program</button>
      <button value='reviews' className="tablinks" onClick={onclickhandler}>Reviews</button>
    </div>
  )
}