import { IoIosArrowForward } from 'react-icons/io'
import { Modal, Box } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css'

function Menu({ open, setOpen }) {

    const menuOptions = {
        options: [
            {
                id: 0,
                image: 'https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/40x40-000000-80-0-0.jpg',
                name: 'Visitante',
                color: '#fff',
                route: '/favorite'
            },
            {
                id: 1,
                offert: 'Obtenha até 6 contas com Deezer Family.',
                subtext: 'R$ 13,30 por mês durante 3 meses. A partir daí, R$ 39,90 por mês. Experimente agora ',
                color: '#fff',
                route: ''
            },
            {
                id: 2,
                text: 'Configurações da Conta',
                color: '#fff',
                route: '/account'
            },
            {
                id: 3,
                text: 'Gerenciar minha assinatura',
                color: '#fff',
                route: ''
            },
            {
                id: 4,
                text: 'Gerenciar minhas exclusões',
                color: '#fff',
                route: ''
            },
            {
                id: 5,
                text: 'Comprar um vale presente',
                color: '#fff',
                route: ''
            },
            {
                id: 6,
                text: 'Ativar um código',
                color: '#fff',
                route: ''
            },
            {
                id: 7,
                text: 'Login',
                color: '#fff',
                route: '/login'
            },
            {
                id: 8,
                text: 'Modo Noturno',
                color: '#fff',
                route: '',
                checkbox: true
            },
            {
                id: 9,
                text: 'Suporte',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 10,
                text: 'Community e feedback',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 11,
                text: 'Planos',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 12,
                text: 'Recursos',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 13,
                text: 'Sobre nós',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 14,
                text: 'jobs',
                color: '#a2a2ad',
                route: ''
            },
            {
                id: 15,
                text: 'Legal',
                color: '#a2a2ad',
                route: ''
            }
        ]
    }

    const [classNames, setClassNames] = useState(menuOptions.options.map(() => ''))

    function handleMouseEnter(index) {
        const newClassNames = [...classNames]
        newClassNames[index] = 'add'
        setClassNames(newClassNames)
    }

    function handleMouseLeave(index) {
        const newClassNames = [...classNames]
        newClassNames[index] = ''
        setClassNames(newClassNames)
    }

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }


    return (
        <Modal className={styles.modalContainer}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={styles.boxContainer} style={style}>
                <section>
                    <div className={styles.menu}>
                        {menuOptions.options.map((item, index) => (
                            <Link to={item.route} key={item.id}>
                                <div className={styles.button}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}>
                                    {item.image && (
                                        <>
                                            <div className={styles.imageProfile}>
                                                <img src={item.image} alt="Profile" />

                                                <span> {item.name} </span>
                                            </div>

                                            <span className={styles[classNames[index]]}> <IoIosArrowForward /> </span>
                                        </>
                                    )}

                                    {item.offert && (
                                        <>
                                            <div className={styles.getDeezer}>
                                                <span id={styles.offert}> {item.offert} </span>

                                                <span> {item.subtext} </span>
                                            </div>

                                            <span className={styles[classNames[index]]}> <IoIosArrowForward /> </span>
                                        </>
                                    )}

                                    {item.text && (
                                        <>
                                            <span style={{ color: item.color }}> {item.text} </span>

                                            {item.checkbox ? (
                                                <>
                                                    <input type="checkbox" id={styles.checkMode} />
                                                    <label htmlFor={styles.checkMode}></label>
                                                </>
                                            ) : <span className={styles[classNames[index]]}> <IoIosArrowForward /> </span>}
                                        </>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default Menu
