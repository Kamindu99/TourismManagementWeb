import React from 'react';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Traveling to the moon is now possible',
        description: 'Traveling to the moon is now possible. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author: 'Mr Kamindu Gayantha',
        authorImg: 'https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A',
        date: '23 April 2023'
    },
    {
        title: 'Rent a car is now available in our country',
        description: 'Rent a car is now available in our country. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author: 'Mr Gayantha Wanigasinghe',
        authorImg: 'https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg',
        date: '05 March 2023'
    },
    {
        title: 'Flights Booking is now in our country',
        description: 'Traveling Flights Booking is now in our country. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        author: 'Mr W.Gayantha',
        authorImg: 'https://pbs.twimg.com/media/FZSpEqFUIAAZIX9?format=jpg&name=large',
        date: '16 May 2023'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;