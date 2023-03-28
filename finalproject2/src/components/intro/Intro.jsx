import "./intro.css";

function Intro() {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h1 className="i-header">Joosepi reis</h1>
                <h2 className="i-header2">ROOMA</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Veebruar 2023</div>
                        <div className="i-title-item">Reisi kestvus 7 päeva</div>
                        <div className="i-title-item">Jalgsi läbitud kõndides 118km</div>
                        <div className="i-title-item">Kõrgeim temperatuur oli 17 kraadi</div>
                        <div className="i-title-item">Madalaim temperatuur oli 1 kraad</div>
                    </div>
                </div>
                <div className="i-desc">
                    Siin veebilehel näitan tehtud pilte, videoid ning Rooma linna kaarti koos külastatud asukohtadega mis on tähistatud väikeste nuppudega.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
        </div>
    </div>
  )
}

export default Intro