import { render, screen } from '@testing-library/react';
import Post from '../PostComments/index';
import PostComment from '../Post/index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment children={undefined} imageUrl={''}/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "Olá, Eduardo" na lista', () => {
        render(<Post />)
        expect(screen.getByTestId('saudacao')).toBeInTheDocument();
        expect(screen.getByText('Olá, Eduardo')).toBeInTheDocument();
    })

    test('Deve adicionar "Qual o estilo que musica que voçê gosta?"', () => {
        render(<Post />)
        expect(screen.getByTestId('pergunta')).toBeInTheDocument();
        expect(screen.getByText('Qual o estilo que música que voçê gosta?')).toBeInTheDocument()
    })
});