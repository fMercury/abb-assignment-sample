import React from 'react'
import Control from './Control';
import './Feature.css';

const Feature = ({ feature }) => {

    // color array is to simulate operation related with the decision of the color on head table
    const color = ["titletableY", "titletableR", "titletableG"]

    return (
        <table className="table table-sm table-striped table-responsive-sm"  >
            <tbody>

                <tr id={color[Math.floor(Math.random() * color.length)]}>
                    <th>{feature.name}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Control</th>
                    <th>Dev</th>
                    <th>Dev Out Tol</th>
                    <th></th>
                </tr>
                {feature.controls.map( (control, index) => 
                    <Control key={index} control={control} />
                    ) }                
            </tbody>
        </table>
    )

};

export default Feature