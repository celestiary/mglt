import React, {useEffect} from 'react'


export default function GltCalc() {
  function readValues() {
    return [Math.tan(parseFloat(this.theta.value) * 1/36000),
            parseFloat(this.solarRadius.value) / parseFloat(this.focusDistance.value)]
  }


  function doCalc() {
    const [v1, v2] = readValues()
    const e1 = toFixedExponential(v1)
    const e2 = toFixedExponential(v2)
    // TODO(pablo): this still converts to expanded notation, I think
    // due to type=number on the field.  I'd like it to stay exp
    // notation, but I also want thespinner controls though, so
    // punting for now.
    this.out1.value = e1
    this.out2.value = e2
  }


  function toFixedExponential(flt, precision = 4) {
    const re = new RegExp(`(\\d\\.\\d{1,${precision}})\\d+(e[+-]\\d+)`)
    return Number(flt).toExponential().replace(re, '$1$2')
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
                defaultValue={toFixedExponential(694248000)}
                onChange={doCalc}/> meters (e.g. Sun's radius)</td>
        </tr>
        <tr>
          <td>Focus Distance (D<sub>L</sub>)</td>
          <td><input
                id="focusDistance"
                type="number"
                step="1000000000000"
                defaultValue={toFixedExponential(500.496e11)}
                onChange={doCalc}/> meters (e.g. 500 AU)</td>
        </tr>
        <tr>
          <td>Deflection (Θ<sub>1</sub>)</td>
          <td><input
                id="theta"
                type="number"
                defaultValue={1.75}
                onChange={doCalc}/> arcseconds (Sun's deflection)</td>
        </tr>
        <tr>
          <td>tan(Θ<sub>1</sub>)</td>
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
