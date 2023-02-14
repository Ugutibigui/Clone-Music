import './Profile.css'

import {IoIosArrowForward} from 'react-icons/io'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Profile(props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal open={props.open}
        onClose={() => props.setOpen(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition>
            <Box className='opacity-profile' style={style}>
                <section>
                    <div className="profile-top">
                        <div className="profile">
                            <div className="image-profile">
                                <img src="" alt="Profile" />

                                <span>Visitante</span>
                            </div>
                            
                            <span> <IoIosArrowForward/> </span>
                        </div>

                        <div className="get-deezer">
                            <p>Obtenha até 6 contas com Deezer Family.</p>
                            <span>R$ 13,30 por mês durante 3 meses. A partir daí, </span>
                            <span>R$ 39,90 por mês. Experimente agora</span>
                        </div>
                    </div>
                    
                    <hr/>

                    <div className="profile-center">
                        
                    </div>
                    <div className="profile-bottom">

                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default Profile
