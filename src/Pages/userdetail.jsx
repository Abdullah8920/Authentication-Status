import { Link, useParams } from 'react-router'

const UserDetail = () => {

    const paramsdata = useParams()
    console.log(paramsdata)


    return (
        <div>
            <h1>User Details!</h1>
            <h2>User : {paramsdata.id}</h2>
            <h3><Link to="/users">Back</Link></h3>

        </div>
    )
}

export default UserDetail
