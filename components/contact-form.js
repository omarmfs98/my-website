import { Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux'

const useCounter = () => {
    const sended = useSelector((state) => state.utils.sended)
    const sending = useSelector((state) => state.utils.sending)
    return { sended, sending }
}

let ContactForm = props => {
    const { handleSubmit } = props
    const { sended, sending } = useCounter()

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            {!sended ?
                <div>
                    <h2 className="font-bold text-2xl mb-4">Contacto</h2>
                    <div className="text-lg text-gray-600">
                        <p className="mb-3 text-sm lg:text-lg">Si deseas contactarme, por favor llena el formulario:</p>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Nombre
                                </label>
                                <Field name="name" disabled={sending} component="input" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Omar" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Correo
                                </label>
                                <Field name="email" disabled={sending} component="input" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="omar@example.com" />
                                <p className="text-gray-600 text-xs italic">Respondere lo mas pronto posible ⚡</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3">
                                <button disabled={sending} className="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    {sending ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className="flex flex-wrap -mx-3 mb-3 helper-contact items-center text-center text-xl font-bold">
                        Gracias por querer contactarme, pronto te respondere 😎
                    </div>
                </div>
            }

        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm