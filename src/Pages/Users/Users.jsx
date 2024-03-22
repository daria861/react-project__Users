import Button from '@mui/joy/Button';
import './Users.css'

const users = [
    {
        id: '1',
        name: 'Alex',
        pass: '12364',
        email: 'alex@mail.com'
    },
    {
        id: '2',
        name: 'John',
        pass: '123224',
        email: 'john@mail.com'
    },
    {
        id: '3',
        name: 'Ann',
        pass: '123234',
        email: 'ann@mail.com'
    },
    {
        id: '4',
        name: 'Max',
        pass: '132234',
        email: 'max@mail.com'
    }
]

export default function Users() {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Destroy</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td><a href="#">View profile</a></td>
                        <td><Button size="sm" color="danger">x</Button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="nav-block">
                <button>Create a new User</button>
            </div>
        </div>
    )
}