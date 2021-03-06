import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
             STudTEC
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Student Teacher Combine Effort
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              It is a website for both Teachers and students for where a organization/school/college can maintain there student/teacher records efficiently.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                
                <Grid item>
                  <Button  variant="contained" color="primary">
                    Student
                  </Button>
                </Grid>
                
                
                <Grid item>
                  <Button variant="contained" color="primary">
                             Teacher         
                  </Button>
          
                </Grid>
                
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="l">
          {/* End hero unit */}
          <Grid container spacing={4} alignItems ="center" justify="center">
            {cards.map((card) => (
              <Grid  item key={card} xs={12} sm={6} md={5}>
                

                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media.istockphoto.com/vectors/school-lesson-little-students-and-teacher-vector-id509247782?k=6&m=509247782&s=612x612&w=0&h=iNUU-xoWZyN9qP_BhkKiDRqplaENtiMZaBIYlRIghX4="
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h3" component="h2">
                       Student-Teacher
                    </Typography>
                    <Typography>
                      A website that provides you simple solution for handling basic informations of your students and teacher effectively with there detailed information.
                   </Typography>
                  </CardContent>
                  <CardActions>
          
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright/>
      </footer>
      {/* End footer */}
    </React.Fragment>
  
  );
}
