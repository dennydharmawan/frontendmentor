import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import imageSrc from '../public/channel.jpg';

// TODO research about cumulative shift
// FIXME why do i need verticalAlign here?
function ProductPreviewCard() {
  return (
    <Box
      className="pageContainer"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F3EAE3',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <Box sx={{ maxWidth: '800px' }}>
        <Box
          className="CardContainer"
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <Box className="CardColumn" sx={{ backgroundColor: 'green' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4.5'
              }}
            >
              <Image
                alt="Mountains"
                src={imageSrc}
                // src="https://images.unsplash.com/photo-1597220282565-0752c930fb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                layout="fill"
                placeholder="blur"
              />
            </Box>
          </Box>
          <Box
            className="CardColumn"
            sx={{
              padding: '2rem',
              backgroundColor: 'lightblue',
              display: 'flex',
              gap: '1rem',
              flexDirection: 'column',
              minWidth: '160px'
            }}
          >
            <Typography
              sx={{ letterSpacing: '4px' }}
              variant="h6"
              fontWeight={'light'}
              gutterBottom
            >
              House Location
            </Typography>
            <Typography variant="h4" fontWeight={'bold'} gutterBottom>
              Gabrielle Essence De Luna
            </Typography>

            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quod omnis alias adipisci quis cumque aliquid optio accusantium
              earum molestiae vero sapiente perferendis, eius at magni nulla
              quae eum tempore.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4" fontWeight={'bolder'} gutterBottom>
                $700.00
              </Typography>
            </Box>
            {/* <Typography variant="" gutterBottom>
              House
            </Typography>
            <Typography variant="h1" gutterBottom>
              House
            </Typography>
            <Typography variant="h1" gutterBottom>
              House
            </Typography> */}
            <Button variant="contained">Add to Cart</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPreviewCard;
