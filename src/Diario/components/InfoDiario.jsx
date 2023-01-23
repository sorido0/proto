import { Container, Typography, Toolbar, Grid } from "@mui/material"



export const InfoDiario = () => {
    return (

        <Container maxWidth="md" sx={{
            mt: 2,
        }}>

            <Typography variant="h4"> Tu Diario </Typography>
            <hr />
            <Typography variant="p"> Mi Diario es una aplicación fácil de usar, intuitiva, rápida, elegante y segura. Escriba sus propios pensamientos, recuerdos, secretos, eventos de la vida, notas u otra información confidencial. La aplicación se puede utilizar como diario, cuaderno, libreta o bloc de notas.  </Typography>



            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Typography variant="h5"> ¿Cómo funciona? </Typography>

                    <Typography variant="p"> Escriba sus pensamientos, recuerdos, secretos, eventos de la vida, notas u otra información confidencial. La aplicación se puede utilizar como diario, cuaderno, libreta o bloc de notas. </Typography>
                </Grid>

                <Grid item xs={12} >
                    <Typography variant="h5"> Seguridad de los datos </Typography>

                    <Typography variant="p">Aquí se incluye más información que proporcionó el desarrollador sobre los tipos de datos que esta app podría recopilar o compartir, así como las prácticas de seguridad que esta podría seguir. Las prácticas de datos pueden variar en función de la versión de la app, el uso, la región y la edad. </Typography>
                </Grid>

                <Grid item xs={12} >
                    <Typography variant="h5"> No se comparten datos con terceros </Typography>

                    <Typography variant="p"> El desarrollador indica que esta app no comparte datos del usuario con otras organizaciones o empresas. Obtén más información sobre cómo los desarrolladores declaran el uso compartido.</Typography>
                </Grid>

                <Grid item xs={12} >
                    <Typography variant="h5"> Prácticas de seguridad </Typography>

                    <Typography variant="p"> Los datos están encriptados en tránsito
                        Tus datos se transfieren con una conexión segura, Puedes solicitar que se borren los datos
                        El desarrollador te ofrece una forma de solicitar que se borren los datos     
                    </Typography>
                </Grid>


                <Toolbar />
            </Grid>

        </Container>

    )
}
