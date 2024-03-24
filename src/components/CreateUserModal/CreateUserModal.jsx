import './CreateUserModal.css'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'

export function CreateUserModal({ setIsOpenFunc }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <i className='close' onClick={() => setIsOpenFunc(false)}>x</i>
                <div className="input-group">
                    <label>Name</label>
                    <Input
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
                    />
                    <label>Name</label>
                    <Input
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
                    />
                    <label>Email</label>
                    <Input
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
                    />
                </div>
                <div className="btn-sub">
                    <Button size='sm' color='primary'>Save</Button>
                </div>
            </div>
        </div>
    )
}