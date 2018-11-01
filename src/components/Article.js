import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey'
import DeleteIcon from '@material-ui/icons/Delete';
import { Markup } from 'interweave';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e86de'
    },
    secondary: {
      main: '#222f3e'
    }
  }
});

const styles = theme => ({
    card: {
      maxWidth: 1000,
      backgroundColor: grey[400],
    },
    media: {
      height: 0,
      paddingTop: '58.25%', // 16:9
      maxHeight: 1000,
    },
   
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: grey[500],
    },
  });

class Article extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    
    constructor(props) {
    super(props.article);
    this.state = {
        title : props.article.title,
        pubDate : props.article.pubDate,
        link : props.article.link,
        author : props.article.author,
        thumbnail :props.article.thumbnail,
        description : props.article.description,
        content : props.article.content
    };
  }

  //regex used inside the render function to prettify the render of the description (without a href link) and the content (without img)
  render() {
    const { classes } = this.props;
    return(      
        <Card className={classes.card}>
        <CardHeader
            title={<Typography align="center" variant='h6' color='primary' >{this.state.title}</Typography>}
            subheader={this.state.pubDate}
        />
        <CardMedia
          className={classes.media}
          image={this.state.thumbnail}
          title={this.state.title}
        />
        <CardContent >
          <Typography component="p" align='justify' color='secondary'>
            { this.state.description.replace(/<a.*>/g,'').replace(/<.?b>/g,'').replace(/<br>/g,' ').replace(/<p>/g,'').replace(/<\/p>/g,'').replace(/<div.*>/g,' ').substring(0,220)}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <Button size="small" color="primary" href={this.state.link} rel="noopener" target="_blank">
            Go To ARTICLE
           </Button> 
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
            >
            <ExpandMoreIcon />
          </IconButton>
         
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph color='secondary' align='justify'>
            <Markup content={ this.state.content.replace(/<img.*?>/g,'') } />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}


Article.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(Article)
