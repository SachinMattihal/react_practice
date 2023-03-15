import React from 'react'

const State2user = (props) => {
    let data=props.data
  return (
    <div><center>
        <table border="2px">
           <tr><th colspan="7">STUDENT DETAILS</th></tr>
            <tr>
                <th>Name</th>
                <th>Photo</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Mobile</th>
                <th>Place</th>
                <th>Skills</th>
            </tr>
            {
                data.map((x)=>{
                    return <tr>
                    <td>{x.name}</td>
                    <td><img src={x.photo} alt="" style={{height:"50px",width:"50px"}}/></td>
                    <td>{x.gender}</td>
                    <td>{x.dob}</td>
                    <td>{x.mobile}</td>
                    <td>{x.place}</td>
                    <td>
                    {x.skills.map((x)=>{
                        return <li>{x}</li>
                    })}
                </td>
                </tr>
                })
            }
        </table>
        </center>
    </div>
  )
}

export default State2user