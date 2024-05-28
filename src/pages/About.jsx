import React from 'react';

export const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm{" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>{" "}Artsem</span>{" "}👋
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Front-end Developer based in Poland (Poznan), specializing in building applications.
                </p>
            </div>
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>


                </div>
            </div>
        </section>
    )
}
