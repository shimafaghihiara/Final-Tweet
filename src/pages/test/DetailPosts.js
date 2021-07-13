import React from 'react';

const DetailPosts = (props) => {
    return (
        <div>
            <div>
                {
                    props.match.params.mId
                }
                <br/>
                جزئیات بیشتر می باشم خخخخخ
            </div>

        </div>
    );
};

export default DetailPosts;