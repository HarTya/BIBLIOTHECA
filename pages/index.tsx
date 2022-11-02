import prisma from 'lib/prisma';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/Hook';
import { setCategoriesState } from 'store/categoriesSlice';

export const getStaticProps: GetStaticProps = async () => {
    const categories = await prisma.category.findMany();
    
    return {
        props: { categories }
    }
};

function HomePage({ categories }) {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCategoriesState(categories))
    }, [])

    return (
        <div></div>
    );
}

export default HomePage;