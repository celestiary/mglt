import React, {useState} from 'react'


export default function GltCalc() {
  const [solarRadius, setSolarRadius] = useState(694248000)
  const [focusDistance, setFocusDistance] = useState(500.496e11)
  const [theta, setTheta] = useState(1.75 * 1/36000)
  const [out1, setOut1] = useState(null)
  const [out2, setOut2] = useState(null)


  function doCalc() {
    setOut1(Math.tan(theta))
    setOut2(solarRadius/focusDistance)
  }


  return (
    <table summary="variables">
      <tbody>
        <tr>
          <td>Solar Radius! (R)</td>
          <td><input id="sr" defaultValue={solarRadius}/> meters</td>
        </tr>
        <tr>
          <td>Focus Distance (FD)</td>
          <td><input id="fd" defaultValue={focusDistance}/> meters (500 AU)</td>
        </tr>
        <tr>
          <td>Θ<sub>1</sub></td>
          <td><input id="theta" defaultValue={theta}/> arcseconds</td>
        </tr>
        <tr>
          <td>tan(Θ)</td>
          <td><input id="out1" defaultValue={out1}/></td>
        </tr>
        <tr>
          <td>computed</td>
          <td><input id="out2" defaultValue={out2}/></td>
        </tr>
        <tr><td colSpan="2"><button onClick={doCalc}>To The Stars!</button></td></tr>
      </tbody>
    </table>
  )
}
