import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme=>({
    root: {
        backgroundColor: 'white',
        padding: '1.5rem 1rem',
        width: '25%'

    },

    parentText:
        {
            marginLeft: '0.5rem',
            width: 'max-content',
            direction: 'ltr'

        },
    profName:
        {
            flex: 1,
            fontSize: '1rem !important',
            paddingTop: "10px"
        },
    profId:
        {
            flex: 1,
            color: theme.palette.text.hint,
            fontSize: '0.75rem !important'
        },
    tweeterRoot:
        {
            borderRadius:'2.5rem',
            backgroundColor: "#f5f8fa",
            marginTop:'3rem',
            padding:'11px 24px'
        },
    tweeterTitle:
        {
            fontSize:'1.1rem !important',
            fontWeight:'600 !important',
            marginBottom:'11px'
        },
    tweeterParent:
        {
            padding:'10px 0',
            width:"100%"
        },
    tweeterName:
        {
            flex:1,
            paddingRight:"10px"
        },
    userbtn1:
        {

            textAlign:"right",
            justifyContent:'right !important'


        },
    Menu:
        {
           width:'300px'
        }








}));

export default useStyle;