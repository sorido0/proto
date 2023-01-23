import 'setimmediate';

import { v2 as cloudinary } from 'cloudinary'


import { subirArchivos } from './../../src/helpers/subirArchivos';


cloudinary.config({
    cloud_name: 'sorido0',
    api_key: "188638655141419",
    api_secret: "kIH89qv94luldTIhh2jRQFdb2yA",
    secure: true
});



describe('Priebas el helpers De subir archivos', () => { 

        const imageURl = "https://img.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg"

    test('Debe de cargar un archivo y retornar el URL', async () => {

        
            

            
            //     const url = await subirArchivos( imageURl );
            // //console.log(url);
            //     expect(typeof url).toBe('string');

            // // Borrar imagen por ID
            //     const segments = url.split('/');
            //     const imageId = segments[segments.length - 1].replace('.jpg', '');
            // //console.log(imageId);
            //     const resp =  await cloudinary.api.delete_resources([ "notas/" + imageId] );
            // //console.log(resp);
    
        }        
    )

    test('Debe de retornar un error', async () => {
            
            const file = new File([], 'foto.jpg');
            const url = await subirArchivos( file );
            //console.log(url);
            expect( url ).toBe( null );
        }
    )


 })