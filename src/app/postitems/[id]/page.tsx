'use client'

import React, {useState, useEffect} from "react";
import initialPost from '@/sections/posts';
import './style.css';
import Preloader from "@/components/Preloader";

export default function postitems({ params }: { params: {id: string}}) {
    const id: string = params.id;

    const [item, setItem] = useState({initialPost});

    const getSinglePostData= ()=>{
        fetch(`/api/postitems/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
        .catch(e => console.log(e.message));;
    };

    useEffect(() =>{
        getSinglePostData();
    },[]);

    return (
        <main id="main">
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 post-content">
                            <div className="single-post">
                                <div className="post-meta">
                                    <span className="mx-1">
                                        <i className="bi bi-dot"></i>
                                        <h1 className="mb-5">{item.title}</h1>
                                        <p>
                                            <span className="firstcharacter">
                                                {item.brief && item.brief.charAt(0)}
                                            </span>
                                            {item.brief && item.brief.substring(1)}
                                        </p>

                                        <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Vero temporibus repudiandae, 
                                        inventore pariatur numquam cumque possimus exercitationem? 
                                        Nihil tempore odit ab minus eveniet praesentium,
                                         similique blanditiis molestiae ut saepe perspiciatis officia nemo,
                                          eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet,
                                           quo, praesentium dignissimos.
                                        </p>
                                        <figure className='my-4'>
                                                
                                            <img src={`/${item.img}`} alt="" className="img-fluid" />
                                            <figcaption>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Explicabo, odit?

                                            </figcaption>
                                        </figure>
                                    </span>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}