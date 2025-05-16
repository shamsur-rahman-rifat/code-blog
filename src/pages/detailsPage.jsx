import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { postDetails } from '../apiRequest/apiReq.js';
import BlogDetail from './../components/blogDetail';
import Loader from '../components/loader.jsx';

const detailsPage = () => {
        let {postId}=useParams()
        let [list,setList]=useState(null)

        useEffect(()=>{
            (async ()=>{
                let res=await postDetails(postId)
                setList(res);
            })()
        },[postId])


    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetail list={list} />}
        </Layout>
    );
};

export default detailsPage;