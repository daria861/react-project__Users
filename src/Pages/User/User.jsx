import './User.css'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'
import { useState } from 'react';

export default function User() {

    const [editMode, setEditMode] = useState(false)
    
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {editMode ? (
                        <tr>
                        <td>1</td>
                        <td><Input
                            placeholder="Type in here…"
                            variant="soft"
                            sx={{
                                '--Input-radius': '0px',
                                borderBottom: '2px solid',
                                borderColor: 'neutral.outlinedBorder',
                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                                '&:focus-within::before': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        /></td>
                        <td><Input
                            placeholder="Type in here…"
                            variant="soft"
                            sx={{
                                '--Input-radius': '0px',
                                borderBottom: '2px solid',
                                borderColor: 'neutral.outlinedBorder',
                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                                '&:focus-within::before': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        /></td>
                        <td><Input
                            placeholder="Type in here…"
                            variant="soft"
                            sx={{
                                '--Input-radius': '0px',
                                borderBottom: '2px solid',
                                borderColor: 'neutral.outlinedBorder',
                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                                '&:focus-within::before': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        /></td>
                      
                        <td className='btns-group'>
                            <Button size='sm' color='success'>Save</Button>
                            <Button size='sm' onClick={() => setEditMode(false)} color='danger'>x</Button>
                        </td>
                    </tr>
                    ):  (<tr>
                            <td>1</td>
                            <td>Alex</td>
                            <td>1233232</td>
                            <td>alex@mail</td>
                            <td><button onClick={() => setEditMode(true)} className='edit-btn'>Edit user</button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>

            <div className="nav-block">
                <button>Create a new User</button>
                <button>View all users</button>
            </div>
        </div>
    )
}