import { useSelector } from 'react-redux';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}



export const ImgGalery = () => {

  const { imageUrl } = useSelector(state => state.elDiario.NotaActiva);
  console.log(imageUrl);


  return (
    <>
      <ImageList
        sx={{ width: "90%", height: 300 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {imageUrl?.map((item) => (
        <ImageListItem key={item} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item, 121, item.rows, item.cols)}
            alt="imagen"
            loading="lazy"
          />
        </ImageListItem>
      ))}

      </ImageList>


    </>
  )
}
