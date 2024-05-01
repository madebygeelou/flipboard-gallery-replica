import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Gallery from './components/Gallery.js'

function ArtArticle() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg'/>
    </Card>
  );
}

export default ArtArticle;