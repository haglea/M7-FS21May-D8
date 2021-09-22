import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Song } from "./MySearch"


const SingleSearch = (song: Song) => {
    return ( 
        <Col sm={6}>         
            <Card className="m-2">
                <Row>
                     {/* <Col>
                         <Card.Img variant="top" src={song.album.cover} className="text-center m-3" alt="image is unavailable" /> 
                    </Col> */} 
                    <Col>
                        <Card.Header>{song.title}</Card.Header>                
                        <Card.Body>
                            <Card.Title>{song.artist.name}</Card.Title>
                            <Card.Subtitle className="text-left">
                                {song.album.title}
                                </Card.Subtitle>
                                <Button variant="primary" className="mt-1">
                                   <Link to={`/${song.id}`} className="text-white">
                                        Details
                                    </Link>
                                </Button>                             
                        </Card.Body>
                    </Col> 
                </Row>
            </Card>
        </Col>       
    );   
} 

export default SingleSearch;