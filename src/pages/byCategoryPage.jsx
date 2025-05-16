import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../apiRequest/apiReq.js';
import BlogList from '../components/blogList.jsx';
import Loader from '../components/loader.jsx';


const byCategoryPage = () => {
    let {categoryId}=useParams()

        let [list,setList]=useState(null)
    
        useEffect(()=>{
            (async ()=>{
                let res=await postByCategory(categoryId)
                setList(res);
            })()
        },[categoryId])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
    );
};

export default byCategoryPage;