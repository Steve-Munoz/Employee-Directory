// create class components for directory

// have SVGPathSegCurvetoQuadraticSmoothAbs
// sort by first name
// sort by last name
// render


import React, { Component } from 'react'
import employees from "./db.json"


export default class Directory extends Component {
    state = {
        employees: employees
    }

    
