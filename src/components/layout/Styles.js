import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',



    },
    content:
        {
            flex:'1',
            padding:18,
            backgroundColor:'white',
            flexDirection:"column",
            marginTop:'0.5rem',
            overflow:"auto"
        },

    leftSideBar:
        {
            backgroundColor: 'pink',
            width:'25%'
        },
    MainPart:
        {
            backgroundColor:"cyan",
            flex: '1'
        },
    divider:
        {
            height: '100%',
            width: '2',
            backgroundColor: 'blue !important',


        }



});

export default useStyle;