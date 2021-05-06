import React, { useRef, useState } from "react";
import Position from '../position/position';
import HandCards from '../handCards/handCards';
import Case from '../case/case';
import Submit from '../submit/submit';
import GetOptSolution from '../logic/logic'

const DDbutton = {
    fontWeight: "bold",
    letterSpacing: "4px",
    fontSize: "14px",
    margin: "10px"
}

const DDstyle = { width: "70vw", padding: "5px 10px" }

let GetOpt = (x, y, z) => {
    return GetOptSolution(x.current.value.value, y.current.value, z.current.value.value)
}

function Content() {
    let csRef = useRef();
    let ptRef = useRef();
    let hcRef = useRef();
    let ddRef = useRef();
    const [opt, changeopt] = useState("");

    return (
        <div>
            <Position ptref={ptRef} />
            <HandCards hcRef={hcRef} />
            <Case csref={csRef} />
            <Submit ddRef={ddRef} testhc={hcRef} optfunc={() => changeopt(GetOpt(ptRef, hcRef, csRef))} />
            <wired-dialog ref={ddRef} >
                <div style={DDstyle}>
                    <h3 style={{ padding: "10px 0 24px" }} >最优策略：</h3>
                    <p style={{ padding: "0 0 10px" }}>{opt}</p>
                    <div style={{ textAlign: "center", padding: "8px 0" }}>
                        <wired-button elevation="1" onClick={() => ddRef.current.open = false}>
                            <span
                                style={DDbutton}>返回</span>
                        </wired-button>
                    </div>
                </div>
            </wired-dialog>
        </div>
    );
}


export default Content;
