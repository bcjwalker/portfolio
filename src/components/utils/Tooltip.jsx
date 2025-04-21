function Tooltip( props ) {
    return (
        <>
            <span className={`tooltiptext ${props.pos}`}> {props.msg} </span>
        </>
    )
}

export default Tooltip