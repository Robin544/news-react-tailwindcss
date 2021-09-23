import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function List(props: any) {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        (async () => await getNewsList())();
    }, []);

    const getNewsList = async () => {
        let data = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
        setNewsList(data.data);
    }

    return (
        <div className="List">
            <h4 className="text-4xl font-bold text-center uppercase">News</h4>
            <table className="table-fixed text-center w-full">
                <thead className="text-lg border-solid rounded-t-lg border-black border-t-8 border-opacity-50">
                    <tr>
                        <th className="w-1/2 p-2">News ID</th>
                        <th className="w-1/2 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newsList && newsList.map((_id, idx) => (
                        <tr className={idx % 2 == 0 ? "bg-black bg-opacity-10" : ""} key={idx}>
                            <td className="p-2 rounded-l-full">{_id}</td>
                            <td className="p-2 rounded-r-full cursor-pointer hover:text-red-800"><Link to={`/details/${_id}`} className="nav-link">Edit</Link></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;
