import React from 'react'

export const VisibilitiControl = (props) => {
    return (
        <div className="form-check">
            <input type="checkbox"
            className="form-check-input"
            checked={props.ischeked}
            onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
            show {props.description}
            </label>
        </div>
    )
}
