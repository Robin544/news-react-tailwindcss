import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Details(props: any) {
    const [details, setDetails] = useState({
        by: "",
        descendants: 0,
        id: 0,
        kids: [],
        score: 0,
        time: new Date().getTime(),
        title: "",
        type: "",
        url: ""
    });

    useEffect(() => {
        (async () => await getNewsDetails())();
    }, [props?.match?.params?.id]);

    const getNewsDetails = async () => {
        const data = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${props?.match?.params?.id}.json`);
        setDetails(data.data);
    }

    return (
        <div className="border-solid rounded-lg border-black p-5 border-t-8 border-opacity-50 shadow-2xl">
            <span className="text-sm text-green-900 font-semibold underline"><Link to={`/`}>Go To List</Link></span>
            <h4 className="text-4xl font-bold text-center uppercase">Details</h4>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Id:</label>
                <p className="ml-10">{details?.id}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">By:</label>
                <p className="ml-10">{details?.by}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Descendants:</label>
                <p className="ml-10">{details?.descendants}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Score:</label>
                <p className="ml-10">{details?.score}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Time:</label>
                <p className="ml-10">{details?.time}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Title:</label>
                <p className="ml-10">{details?.title}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Type:</label>
                <p className="ml-10">{details?.type}</p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Url:</label>
                <p className="ml-10"><a className="text-blue-900" href={`${details?.url}`} target="_blank">{details?.url}</a></p>
            </div>
            <div className="mt-3 flex">
                <label className="font-semibold uppercase">Kids:</label>
                {details.kids && (
                    <ul className="ml-10">
                        {details.kids.map((id, idx) => <li>{id}</li>)}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Details;
