import React from 'react';
import Tweet from "./tweet";

const TweetList = ({data}) => {
    return (
        <div>
            {
                data.map(tweet=><Tweet data={tweet}/>)
            }





        </div>
    );
};

export default TweetList;