import React from 'react';

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    // let {x,y,z}=props;

    if ( (props.x===props.y) && (props.y===props.z) ){
        return(
            <>
                <div className='slot_inner'>
                    <h1>
                        {props.x} {props.y} {props.z}
                    </h1>
                    <h1> This is Matching. </h1>
                    <hr />
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className='slot_inner'>
                    <h1>
                        {props.x} {props.y} {props.z}
                    </h1>
                    <h1> This is Not Matching. </h1>
                    <hr />
                </div>
            </>
        );
    }
};

export default SlotM;
