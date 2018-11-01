import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Article from '../components/Article'

class ArticlesList extends Component {

    constructor(props) {
        super(props.rssfeed)
        console.log('ArticlesList rss feed: '+props.rssfeed)
        this.state = {
            rssfeed : props.rssfeed,
            articles: [],
            searchString: '',
            uniqueKey: 1
        }
        this.updateRssfeed = this.updateRssfeed.bind(this);
        
    }

    getArticles = (rssfeed) => {
        let feedToLoad = '';
        /*if(this.state.rssfeed === ''){
            feedToLoad = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fkorben.info%2Ffeed&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=8"
        }
        else{*/
            feedToLoad = this.state.rssfeed
        //}
        console.log("Feed to load: "+feedToLoad);
        axios.get(rssfeed)
        .then(response => {
           const items = response.data.items;
           this.setState({ articles: items });
           console.log('articles:'+ items.title)
           this.state.uniqueKey += 1;           
        })
       .catch(function (error) {
        console.log("Error occured while fetching data")
         console.log(error);
       });
        
    }

    componentDidMount() {
        this.getArticles(this.state.rssfeed);
    }    

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getArticles()
    }


    /*componentDidUpdate(prevProps) {
        if (this.props.rssfeed !== prevProps.rssfeed) {
            this.setState({rssfeed:this.props.rssfeed});
            this.getArticles()
        }
    }*/

    
    componentWillReceiveProps(nextProps) {
        console.log('nexprops: '+nextProps.rssfeed)
        if (this.props.rssfeed !== nextProps.rssfeed) {
            /*this.setNewRssFeed(newRssFeed)*/
            this.updateRssfeed(nextProps.rssfeed)
        }
    }

    updateRssfeed(newRssFeed){
        console.log("old rss feed:"+this.state.rssfeed)
        //this.state.rssfeed= newRssFeed;
        this.getArticles(newRssFeed)
        this.setState({ rssfeed: newRssFeed });
        //this.forceUpdate()
    }


    render() {
        return (
            <div key={this.state.uniqueKey}>
                {this.state.articles ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Articles"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.articles.map(currentArticle => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Article article={currentArticle} />  
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No articles found" }
            </div>
        )
    }
}

ArticlesList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default ArticlesList;