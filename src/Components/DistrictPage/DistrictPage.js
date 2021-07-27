function DistrictPage(props) {
    return (
        <div style={{color:"white"}}>
            {props.match.params.stateName}
           
            {props.match.params.districtName}
        </div>
    )
}

export default DistrictPage
