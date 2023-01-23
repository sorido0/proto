



export const subirArchivos = async (file) => {


    if (!file) return null;


    const cloudUrl = "https://api.cloudinary.com/v1_1/sorido0/image/upload";
    //const cors = require('cors');

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "diario");
  


    //formData.append(cors, 'https://api.cloudinary.com/v1_1/dqv5c537q/upload_large');
    
    
    try {
        
        //console.log(formData);
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
            //mode: 'no-cors',
          
        });

       // console.log(resp)

        // if (!resp.ok) return new Error('No se pudo subir el archivo');
        if (!resp.ok) return null;

        const cloudResp = await resp.json();
        //console.log({ cloudResp })

        return cloudResp.secure_url;

    } catch (error) {
       // console.log(error);
        // throw new Error(error.message);
        return null;
    }

}