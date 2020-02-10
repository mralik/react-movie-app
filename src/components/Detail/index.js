import React, {useEffect, useState} from 'react';

import Get from "../../api/Get";
import Constants from "../../utils/Constants";
import {DetailContainer, ImageWrap, Image, H3, Content, Badge, UL} from './styled';


function Index(props) {
    const id = props.match.params.id
    const [movies, setMovies] = useState({});
    const [genres, setGenres] = useState([]);
    const [langs, setLangs] = useState([]);
    const [countries, setCountries] = useState([]);
    const [compaines, setCompaines] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const popularMovies = await Get.movies(id);
                setMovies(popularMovies.data);
                setGenres(popularMovies.data.genres);
                setLangs(popularMovies.data.spoken_languages);
                setCountries(popularMovies.data.production_countries);
                setCompaines(popularMovies.data.production_companies);

            })();
        } catch (e) {
        }
    }, []);


    return (


        <div>
            <DetailContainer>
                <ImageWrap>
                    <Image image={`${Constants.IMAGE_URL}/${movies?.poster_path}`}/>
                </ImageWrap>


                <Content>
                    <H3>{movies.original_title}
                        <Badge>{movies.vote_average}</Badge>
                    </H3>
                    <span>{movies.overview}</span>

                    <UL>
                        <li><span className="title">Status:</span> <span>{movies.status}</span></li>
                        <li><span className="title">Date:</span> <span>{movies.release_date}</span></li>
                        <li><span className="title">Genre: </span>
                            {genres.map(value => (
                                <span className="array" key={value.id}>
                              {value.name}</span>

                            ))}
                        </li>
                        <li><span className="title">Spoken Language: </span>
                            {langs.map((value, i) => (
                                <span key={i}>
                              {value.name} </span>

                            ))}
                        </li>
                        <li><span className="title">Production Company: </span>
                            {compaines.map((value, i) => (
                                <span className="array" key={i}>
                              {value.name}</span>

                            ))}
                        </li>
                        <li>
                            <span className="title">Production Country: </span>
                            {
                                countries.map((value, i) => <span className="array" key={i}>
                              {value.name}</span>)
                            }
                        </li>

                    </UL>


                </Content>
            </DetailContainer>
        </div>
    )


}


export default Index;
