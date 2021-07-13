import React from 'react';
import {Link} from "react-router-dom";

const Posts = () => {
    return (
        <div>
            <div>
                پوست اول
                <br/>
               <Link to={"/posts/1"}>جزئیات بیشتر</Link>
                <br/>
            </div>
            <div>
                پوست دوم
                <br/>
                <Link to={"/posts/2"}>جزئیات بیشتر</Link>
                <br/>
            </div>
            <div>
                پوست سوم
                <br/>
                <Link to={"/posts/3"}>جزئیات بیشتر</Link>
                <br/>
            </div>

        </div>
    );
};

export default Posts;