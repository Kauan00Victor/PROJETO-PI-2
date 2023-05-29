import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContatosContext from '../contexts/ContatosContextx';


export default function Novo() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { incluirContato } = useContext(ContatosContext)
    const navigate = useNavigate()

    function onSubmit(data) {
        incluirContato(data)
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='nome'>Nome</label>
                <input type="text" {...register('nome', { required: 'Campo obrigatório' })} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label htmlFor='tel'>Telefone</label>
                <input type="text" {...register('telefone', { required: 'Campo obrigatório' })} />
                {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>
            <button>Enviar</button>
        </form>

    )
}