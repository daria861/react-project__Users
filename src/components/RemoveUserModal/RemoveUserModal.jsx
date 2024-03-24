import './RemoveUserModal.css'

export default function RemoveUserModal(){

    return(
        <div className="modal">
            <div className="modal-content">
                <i className="close">x</i>
                <h1>Remove User</h1>

                <div className="btns">
                    <button className='accept'>Yes, remove</button>
                    <button className="reject">No</button>
                </div>
            </div>
        </div>
    )
}