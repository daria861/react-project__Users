import Button from '@mui/joy/Button';
import './Users.css'
import { Link } from 'react-router-dom';
import { CreateUserModal } from '../../components/CreateUserModal/CreateUserModal';
import { useState } from 'react';

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

export default function Users({ setIsOpenFunc }) {

    const [isOpen, setIsOpen] = useState(false)

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

                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td><Link to='userId'>View profile</Link></td>
                            <td><Button size="sm" color="danger">x</Button></td>
                        </tr>
                    ))}


                </tbody>
            </table>
            <div className="nav-block">
                <button onClick={() => setIsOpen(true)}>Create a new User</button>
            </div>
            {isOpen && <CreateUserModal setIsOpenFunc={setIsOpen} />}
        </div>

    )
}