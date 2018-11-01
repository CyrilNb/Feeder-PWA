import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArticlesList from './ArticlesList';
import { Button } from '@material-ui/core';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        rssfeed: "",
        top: false,
        left: false,
        uniqueKey: 1
    }
      /*props.rssfeed ? (
        this.state.rssfeed = ''
      ) : (
      this.state = {
        rssfeed: "
    }
    )*/
    // This binding is necessary to make `this` work in the callback
    this.changefeed = this.changefeed.bind(this);
    console.log("TemporaryDarwer rssfeed: "+this.state.rssfeed)
  }

  changefeed(event,newfeed){
    event.preventDefault();
    console.log('CHANGE FEED: '+newfeed)
    this.state.rssfeed= newfeed;
    this.state.uniqueKey += 1
    console.log('state feed: '+this.state.rssfeed)
  }

 
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
                <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fkorben.info%2Ffeed&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=8")}>
                Korben
                </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.programmez.com%2Frss.xml&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
                Programmez
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.developpez.com%2Findex%2Frss&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
                Developpez
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Flogiciel%2Frss.xml&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
              Monde Informatique
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e," https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.journaldunet.com%2Fiot%2Frss%2F&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
              Journal du net
              </Button>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FMobilecrunch&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
              TechCrunch
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button onClick={(e) => this.changefeed(e,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Ftechnews.rss&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}>
              Reddit Tech News
              </Button>
            </ListItem>
        </List>
      </div>
    );

    return (
      <div key={this.state.uniqueKey}>
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('top', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" align="center" className={classes.grow}>
            Feeder - RSS Reader
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <ArticlesList rssfeed={this.state.rssfeed}/>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);