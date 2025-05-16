import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import BlogList from '../components/blogList.jsx';
import { postNewest } from '../apiRequest/apiReq.js';
import Loader from '../components/loader.jsx';

const homePage = () => {

    let [list,setList]=useState(null)

    useEffect(()=>{
        (async ()=>{
            let res=await postNewest()
            setList(res);
        })()
    },[])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
    );
}

export default homePage