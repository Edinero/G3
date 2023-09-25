import ReactPlayer from "react-player";
const Videoplay = () => {
  return (
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <ReactPlayer
                            playing={false}
                            url={`https://www.youtube.com/watch?v=${video[0].key}`}
                          />
      </div>
    
    </div>
  </div>
</div>
  );
};


export default Videoplay