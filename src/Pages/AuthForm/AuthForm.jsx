import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'
import './AuthForm.css'

export default function AuthForm(){


    return(
        <div className="container">
            <form>
                <div className="inp-field">      
                    <Input placeholder="Type your name" variant="outlined" color="primary" />
                </div>
                <div className="inp-field">      
                    <Input placeholder="Type your password" variant="outlined" color="primary" />
                </div>
                <div className="inp-field">      
                    <Input placeholder="Type your email" variant="outlined" color="primary" />
                </div>


                <div className="btn-submit">
                    <Button>Submit</Button>
                </div>

                {/* <a href="#">View all users</a> */}
            </form>
        </div>
    )
}