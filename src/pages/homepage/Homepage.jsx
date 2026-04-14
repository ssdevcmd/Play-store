import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import TrendingApps from '../../components/homepage/TrendingApps';
import { useLoaderData } from 'react-router';

const Homepage = () => {

    // const data = useLoaderData();
    // console.log(data, 'data from homepage');
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default Homepage;