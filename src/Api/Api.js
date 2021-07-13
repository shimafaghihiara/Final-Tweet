import Axios from 'axios';

export const getAxiosInstance=()=>{
return Axios.create({
    baseURL:"http://localhost:3000",
    headers:
        {
            all:{
             API_KEY:  "asgsdgugd"
            }
        }

    }
);
}

export const getAxiosInstanceAuth=()=>{
    return Axios.create({
            baseURL:"https://twitterapi.liara.run/api/",
            headers:
                {
                    all:{
                       // API_KEY:  "asgsdgugd"
                    }
                }

        }
    );
}

// for upload profile - all tweets and .... from database
export const getAxiosInstanceAPI=()=>{
    return Axios.create({
            baseURL:"https://twitterapi.liara.run/api/",
            headers:
                {
                        "x-auth-token":  localStorage.getItem('x-auth-token')
                }

        }
    );
}