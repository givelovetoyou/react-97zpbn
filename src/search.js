import React,{Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Word1 from "./word/word1";
import Word2 from "./word/word2";
import Word3 from "./word/word3";
import Word4 from "./word/word4";
import Word5 from "./word/word5";
import Word6 from "./word/word6";
import "./style-search.css";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});


class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
      wordsound: '',
    };
    
    this.openMusic = this.openMusic.bind(this);
  }
  

  async openMusic(value){
    let audio = await new Audio("https://us-central1-dictionary-f2a01.cloudfunctions.net/node/tts/" + value)
    audio.play()
  }

  searchSpace = value => {
    let keyword = value;
    this.setState({ search: keyword });
  };

  
  render(){
  const { classes } = this.props;
  const id = this.props.match.params.id;
  let Word = []
  if (id==1) {
    var textHead = "หมวดที่ 1 สินทรัพย์" ;
    Word = Word1 ;
  }else if(id==2){
    var textHead = "หมวดที่ 2 หนี้สิน" ;
    Word = Word2 ;
  }else if(id==3){
    var textHead = "หมวดที่ 3 ส่วนของเจ้าของ" ;
    Word = Word3 ;
  }else if(id==4){
    var textHead = "หมวดที่ 4 รายได้" ;
    Word = Word4 ;
  }else if(id==5){
    var textHead = "หมวดที่ 5 ค่าใช้จ่าย" ;
    Word = Word5 ;
  }else if(id==6){
    var textHead = "หมวดคำศัพท์บัญชีเฉพาะ" ;
    Word = Word6 ;
  }else if(id==0){
    var textHead = "ค้นหาคำศัพท์ทั้งหมด" ;
    let jsons = Word6.concat(Word1,Word2,Word3,Word4,Word5,Word6);
    Word = jsons ;
  }
  
  const items = Word.filter(data => {
    if (this.state.search == null )  return data
    else if (
      data.word.toLowerCase().includes(this.state.search.toLowerCase()) ||
      data.translate.toLowerCase().includes(this.state.search.toLowerCase())
    ) {
      return data;
    }
  }).map(data => {
    return (
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Paper className={classes.paper}>
                <h1><strong>{data.word}</strong></h1>
                  <p>{data.translate}</p>
                  <button value={data.word} onClick={ () => this.openMusic(data.word)}><i class="fa fa-play"/> Play Sound</button>
                </Paper>
              </Grid>
    );
  });

  return (
    <div>
      <section class="section">
        <div class="title">
          <i2>{textHead}</i2>
        <div class="underline"></div>
        </div>
        <SearchBar
          value={this.state.value}
          onChange={ value => this.searchSpace(value) }
          placeholder="พิมพ์ค้นหาคำศัพท์ได้ที่นี่"
          onCancelSearch = {value => this.searchSpace(value)}
          style={{
            margin: "5% auto",
            width: 50 + "%",
            minWidth: 330,
            maxWidth: 800,
            font: 20
          }}
        />
      <div className={classes.root}>
      <Grid container spacing={1}>
      {items}
      </Grid>
      </div>
      </section>
    </div>
  );
};
}
export default withStyles(styles)(SearchBox);

{/* <audio controls preload="none" >
                  <source
                    src={
                      "https://us-central1-dictionary-f2a01.cloudfunctions.net/node/tts/" + data.word
                    }
                  />
                </audio> */}