import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        padding:'1.5rem 1rem',
        width:'18%'

    },

    LogoType:
        {
            fontSize: '1.5rem !important',
            fontWeight:'400 !important',
            marginRight:'1rem',
            color: theme.palette.primary.main

        },
    hashtagTitle:
        {
            fontSize:'1.5rem !important',
            color: 'red !important',
            fontWeight:' 400 !important',
            marginTop:'1rem'
        },
    hashtag:
        {
            marginRight:'0.5rem',
            fontSize:'1rem !important',
            marginBottom:'0.3rem'


        },

    hashtagButte:
        {
            marginTop:'1rem',
              width:'100% !important',
            justifyContent:'right !important'





        }






}));

export default useStyle;