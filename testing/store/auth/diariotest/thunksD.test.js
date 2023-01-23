
import { seEstaGuardando, anadirNuevaNotaBasia, obtenerNotaActiva } from "../../../../src/store/eldiario/eldiarioSlice";
import { iniciarNuevaNota } from "../../../../src/store/eldiario/thunks"
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { DiarioDB } from "../../../../src/firebase/config";


jest.mock('../../../../src/store/eldiario');

describe('Pruebas el thunsk del diario - iniciarNuevaNota', () => {

    const dispatch = jest.fn();

    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    const id = '123';

    test('Pruevas en iniciarNuevaNota', async () => {


        getState.mockReturnValue({
            auth: {
                uid: id,
            }
        })

        await iniciarNuevaNota()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(seEstaGuardando());

        expect(dispatch).toHaveBeenCalledWith(anadirNuevaNotaBasia({
            id: expect.any(String),
            titulo: '',
            descripcion: '',
            fecha: expect.any(Number),
            imageUrl: [],
        }));



        expect(dispatch).toHaveBeenCalledWith(obtenerNotaActiva(
            {
                id: expect.any(String),
                titulo: '',
                descripcion: '',
                fecha: expect.any(Number),
                imageUrl: [],
            }
        ));


        // TODO: para borrar notas de firebase 
        const referenciaColeccion = collection(DiarioDB, `${id}/diario/notas`);
        const notas = await getDocs(referenciaColeccion);

        const eleminarPromesa = [];
        notas.forEach(nota => eleminarPromesa.push(deleteDoc(nota.ref)));
        await Promise.all(eleminarPromesa);


    })








})