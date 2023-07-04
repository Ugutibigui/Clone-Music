import RadioList from '../../../components/RadioList/RadioList'
import Container from '../../../components/Layout/Container/Container'

function Explore() {

    // Lógica temporaria

    return (
        <Container>
            <h1>Todos os Canais</h1>

            <RadioList h2='Categorias' amount={29} />
            <RadioList h2='Gêneros' amount={38} />
            <RadioList h2='Podscasts por categoria' amount={39} />
        </Container>
    )
}

export default Explore
