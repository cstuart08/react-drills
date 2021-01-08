import React from 'react'

function List(props) {
    let items = props.items
    let itemElements = props.items.map(e => {
        return <p>{e}</p>
    })
    return (
        <div>
            {itemElements}
        </div>
    )
}

export default List