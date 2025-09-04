import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Form from './Form'
import Fourcard from './Fourcard';
import Cardletter from './Cardletter';


const Contact = () => {
    return (

        <>
            <section>
                <section className='overflow-hidden'>
                    <Header />
                    <hr></hr>
                </section>
                <section className='padding-aline mt-5'>
                    <Form />
                </section>
                <section className='padding-aline mt-5'>
                    <Cardletter />
                </section>
                <section className='padding-aline mt-5'>
                    <Fourcard />
                </section>
                <section className='padding-aline mt-5'>
                    <Footer />
                </section>
            </section >
        </>

    )
}

export default Contact
