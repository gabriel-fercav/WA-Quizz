import { makeStyles, Button } from '@material-ui/core' 

const useStyles = makeStyles({

    btn: {
        height: '50px', 
        width: '150px', 
        color: 'grey', 
        borderColor: 'grey' 
    }

})

const Btn = ({children, onClick}) => {

    const classes = useStyles()

    return (
        <Button variant="outlined" className={classes.btn} onClick={onClick}>{children}</Button>
    )

}

export default Btn