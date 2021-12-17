import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { findPublicLinkByType } from "./utils/utils";


const Content = ( { content }) => {
    const publicLinks = content.cmpContentToMasterLinkedAsset.results[0].urls;
    const masterAssetPublicLink = findPublicLinkByType(publicLinks, "preview");
    return (
     <Card sx={{ maxWidth: 345 }}>
     <CardMedia component="img" height="140" image={masterAssetPublicLink[0].url}

     />
     <CardContent>
         <Typography gutterBottom variant="h5" component="div">
             {content.content_Name}
         </Typography>
     </CardContent>    
     </Card>
 )   
}

export default Content;
