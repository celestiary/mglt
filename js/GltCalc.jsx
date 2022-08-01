import React, {useEffect} from 'react'


export default function GltCalc() {
  function doCalc() {
    const v1 = Math.tan(parseFloat(this.theta.value) * 1/36000)
    const v2 = parseFloat(this.solarRadius.value) / parseFloat(this.focusDistance.value)
    this.out1.value = v1
    this.out2.value = v2
  }


  useEffect(() => {
    doCalc()
  }, [])


  return (
    <table summary="variables">
      <tbody>
        <tr>
          <td>Solar Radius (R<sub>O</sub>, radius of lensing star)</td>
          <td><input
                id="solarRadius"
                type="number"
                step="1000000000"
                defaultValue={694248000}
                onChange={doCalc}/> meters</td>
        </tr>
        <tr>
          <td>Focus Distance (D<sub>L</sub>)</td>
          <td><input
                id="focusDistance"
                type="number"
                step="1000000000000"
                defaultValue={500.496e11}
                onChange={doCalc}/> meters (500 AU)</td>
        </tr>
        <tr>
          <td>Θ<sub>1</sub></td>
          <td><input
                id="theta"
                type="number"
                defaultValue={1.75}
                onChange={doCalc}/> arcseconds</td>
        </tr>
        <tr>
          <td>tan(Θ)</td>
          <td><input
                id="out1"
                value={this.out1}
                readOnly/></td>
        </tr>
        <tr>
          <td>computed (solarRadius / focusDistance)</td>
          <td><input
                id="out2"
                value={this.out2}
                readOnly/></td>
        </tr>
        <tr><td colSpan="2"><button onClick={doCalc}>Focus!</button></td></tr>
      </tbody>
    </table>
  )
}
