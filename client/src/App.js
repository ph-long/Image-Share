import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

const App = () => {
    const classes = useStyles();
    // dispatch is a hook to handle dispatch functions
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    // function that repeats when there are changes to dispatch
    useEffect(() => {
        dispatch(getPosts);
    }, [currentId, dispatch])

    return (
        // Container is full page
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align = "center">Mermories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            {/* Grow is animation of that container */}
            <Grow in>
                {/* Container is Posts and Form components with pads */}
                <Container>
                    {/* Grid is Posts and Form components without pads */}
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId}  setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;