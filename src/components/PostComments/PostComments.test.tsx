import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../PostComments/index';
import PostComment from '../Post/index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment children={undefined} imageUrl={''}/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "Olá, Eduardo" na lista', () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: 'Olá, Eduardo'
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));
        expect(screen.getByText('Olá, Eduardo')).toBeInTheDocument();
    });
    
    test('Deve adicionar "Olá, Maria" na lista', () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: 'Olá, Maria'
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));
        expect(screen.getByText('Olá, Maria')).toBeInTheDocument()
    })
});