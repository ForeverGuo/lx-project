/**
 * Created by Administrator on 2016/12/13.
 */

var comments =[
    {"author":"张三","data":"3分钟","text":"今天天气不错"},
    {"author":"李四","data":"5分钟","text":"今天天气不错"}
];

var ConmentBox = React.createClass({
        getInitialState:function () {
            var commentsData = this.props.data;
            return{
                comments:commentsData,
            }
        },
        commentSubmit:function (comment) {
            var commentBox = this.state.comments;
            var newCommentBox = commentBox.concat(comment);
            this.setState({comments:newCommentBox});
            console.log(comment,commentBox,newCommentBox,this.state.comments);
        },
         render:function () {
             return(
                 <div>
                     <div className="ui comments">
                         <h1>评论</h1>
                         <div className="ui divider"></div>
                         <CommentList data={this.state.comments} />
                         <CommentForm onCommentSubmit={this.commentSubmit}/>
                     </div>
                 </div>
             )
         }
});

var CommentList = React.createClass({
    render:function () {
        var data = this.props.data;
        var CommentNodes = data.map(function (comment) {
           return(
               <Comment data={comment.data} author={data.author}>
                   {comment.text}
               </Comment>
           )
        });
        return(
            <div>{CommentNodes}</div>
        )
    }
});
var CommentForm = React.createClass({
    submitEvent:function (event) {
      event.preventDefault();
        var author = this.refs.author.value,
            text = this.refs.text.value;
        this.props.onCommentSubmit({author,text,data:"刚刚"});

    },
    render:function () {
        return(
            <form className="ui reply form" onSubmit={this.submitEvent}>
                <div className="field">
                    {<input type="text" placeholder="姓名" ref="author"/>  }
                </div>
                <div className="field">
                    <textarea type="text" placeholder="评论。。。" ref="text">
                    </textarea>
                </div>
                <input type="submit" className="ui blue button" placeholder="添加评论"/>
            </form>
        )
    }
});

var Comment = React.createClass({
    render:function () {
        return(
            <div className="comment">
                <div className="content">
                    <div className="author">
                        {this.props.author}
                    </div>
                    <div className="metadata">
                        <span className="data">
                            {this.props.data}
                        </span>
                    </div>
                    <div className="text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
});



ReactDOM.render(
  <ConmentBox data={comments}/>,document.getElementById("box")
);