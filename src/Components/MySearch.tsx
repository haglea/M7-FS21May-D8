import React, { ChangeEvent } from 'react';
import { Button, Container, FormControl, Form } from 'react-bootstrap';
import SingleSearch from "./SingleSearch";
import { useState } from 'react';

export interface Song {
    title: string
    artist: {
        name: string
    }
    album: {
            cover: string
            title: string
    }
    id: number
}      

const MySearch = () => {
    const [query, setQuery] = useState<string>("")
    const [songs, setSongs] = useState<Song[]>([])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)           
            const data = await result.json()
            setSongs(data.data)            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <Container>
            <Form className="mb-3" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <FormControl
                placeholder="Enter Song name"
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>)=>setQuery(e.target.value)}
                />
                <Button type="search" variant="outline-secondary" id="button-addon2">
                Search
                </Button>
            </Form>
      </Container>

        <Container>
            {
                songs.map((song) => <SingleSearch {...song} />)                
            }
        </Container>
    </>
  );
};


export default MySearch