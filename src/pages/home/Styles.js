import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme=>({

   root:
        {
            backgroundColor:'#E6E6E6',
            flex: '1',
            overflowY:'auto'
        },
        header:
            {
                display:'flex',
                padding:18,
                backgroundColor:'white'
            },
    headerTitle:
        {
            fontSize:'1.2rem !important',
            fontWeight:600,
            marginRight:5
        },
    divider:
        {
            backgroundColor:'#7EBAFF',
            filter:'opacity(0.18)'
        },
    newTweet:
        {
            display:'flex',
            padding:18,
            backgroundColor:'white',
            flexDirection:"column"
        },
    input:
        {
            marginRight:'1rem',
            flex:1,
            border:'none',
            "&:focus":{outline:'unset'},
            fontFamily:'shabnam'
        },
    newTweetBtn:
        {
            color:'white !important',
            borderRadius:'1rem !important',
            minHeight:'30px !important',
            height:'30px !important',
            fontFamily:'shabnam !important',
            lineHeight:'1rem !important',
            minWidth:'5rem !important'
        },
    newTweetIcon:
        {
            borderRadius:'50%',
            padding:'0.2rem !important',
            border:'0.5px solid #3337',
            marginLeft:'1rem'
        },



    tweetItem:
        {
            display:'flex',
            padding:18,
            backgroundColor:'white',
            flexDirection:"column",
            marginTop:'0.5rem'

        },
    tweetItemName:
        {
            fontWeight:600,
            fontSize:"1rem !important",


        },
    tweetItemId:
        {
            fontSize: "0.9rem !important",
            color:theme.palette.text.hint,
            marginRight:'0.5rem ',
            paddingTop:'0.2rem',
            direction:'ltr'
                    },
    tweetText:
        {
            fontSize:'0.9rem',
            marginTop:'0.6rem'
        },
    likeCount:
        {
            fontSize: "0.8rem !important",
            color:theme.palette.text.hint,
            marginLeft:'0.5rem'

        },
    imgupload:
        {
            width:'150px',
            height:'150px',
            marginTop:'30px',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
        }




}));

export default useStyle;