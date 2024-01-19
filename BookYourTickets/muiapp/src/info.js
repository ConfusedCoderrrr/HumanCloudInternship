import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';


function info() {
    const useStyles = makeStyles((theme) => ({
        gradientButton: {
            background: 'linear-gradient(to right, #FFFFFF, #FF69B4)',
            borderRadius: '5px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px',
        },
        arrowIcon: {
            marginLeft: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex align-items-center justify-content-center m-5">
                    <h1>
                        Build perfect with Rameet
                    </h1>
                </div>
                <div className="col-6">
                    <div className="row">
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
                    </div>
                    <div className="row">
                        <Button className={classes.gradientButton}>
                            Browse all
                            <ArrowForwardIcon className={classes.arrowIcon} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default info;
