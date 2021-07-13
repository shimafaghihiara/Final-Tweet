import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme=>({

    root:
        {
            backgroundColor:'#F3F3F3',
            width:"25rem",
            margin:'10rem auto',
            fontFamily:'shabnam !important'
        },
    title:
        {
            textAlign:"center"
        },
    login:
        {
            display:'flex',
            flexDirection:'column',
            padding:'5px',

        },
    register:{
        display:'flex',
        flexDirection:'column',
        padding:'5px',

    },
    tabs:
        {
            fontFamily:'shabnam !important'
        },
    btn:
        {
            height:'40px',
            backgroundColor:'#BFE8F3',
            marginTop:'10px'
        },
    input:
        {
            border:"none"
        }

}));

export default useStyle;